<?php
if (!defined('_PS_VERSION_'))
	exit;

class Draganddrop extends Module
{
	public function __construct()
	{
		$this->name = 'draganddrop';
		$this->tab = 'front_office_features';
		$this->version = 1.0;
		$this->author = 'mdebelle jgirard';
		$this->need_instance = 0;
		$this->ps_versions_compliancy = array('min' => '1.5', 'max' => _PS_VERSION_);
		$this->dependencies = array('blockcart');

		parent::__construct();

		$this->display_name = $this->l('Drag and Drop');
		$this->description = $this->l('you can drag your product on the main picture and drop it in your basket');

		$this->confirm_uninstall = $this->l('Are you sure you want to uninstall this awesome module ?!?');
	}

	public function install()
	{
		if (parent::install() && $this->registerHook('displayHeader') && $this->registerHook('displayTopColumn'))
		{
			$res = Configuration::updateValue('DRAGANDDROP_NAME', 'Drag and Drop');
			$res = Configuration::updateValue('DRAGANDDROP_WIDTH', '779');
			$res &= $this->createTables();
			return (bool)$res;
		}
		else
			return false;
	}

	/*
	** database tables =)
	*/
	protected function createTables()
	{
		return true;
	}


/*	protected function deleteTables()
	{
		return true;
	}*/

	/*public function uninstall()
	{
		return parent::uninstall();
	}*/

	public function hookdisplayHeader()
	{
		if (!isset($this->context->controller->php_self) || $this->context->controller->php_self != 'index')
			return;

		$this->context->controller->addCSS($this->_path.'draganddrop.css');
		$this->context->controller->addJS($this->_path.'js/draganddrop.js');

		return $this->display(__FILE__, 'header.tpl');
	}

	public function hookdisplayTop($params)
	{
		return $this->hookdisplayTopColumn($params);
	}

	public function hookdisplayTopColumn()
	{
		if (!isset($this->context->controller->php_self) || $this->context->controller->php_self != 'index')
			return;

		return $this->display(__FILE__, 'draganddrop.tpl');
	}

	public function getContent()
	{
		$output = null;

		if (Tools::isSubmit('submit'.$this->name))
		{
			$draganddrop_name = strval(Tools::getValue('DRAGANDDROP_NAME'));
			if (!$draganddrop_name || empty($draganddrop_name) || !Validate::isGenericName($draganddrop_name))
				$output .= $this->displayError( $this->l('Invalid Configuration value') );
			else
			{
				Configuration::updateValue('DRAGANDDROP_NAME', $draganddrop_name);
				$output .= $this->displayConfirmation($this->l('Settings updated'));
			}
		}
		return $output.$this->displayForm();
	}

	public function displayForm()
	{
		// Get default Language
		$default_lang = (int)Configuration::get('PS_LANG_DEFAULT');

		// Init Fields form array
		$fields_form[0]['form'] = array(
			'legend' => array(
				'title' => $this->l('Creat your main scene'),
			),
			'input' => array(
				array(
					'type' => 'text',
					'class' => 'span5',
					'label' => $this->l('Give a name to your fucking scene:'),
					'name' => 'DRAGANDDROP_NAME',
					'size' => 80,
					'required' => true
				)
			),
			'submit' => array(
				'title' => $this->l('Save'),
				'class' => 'button'
			)
		);

		$helper = new HelperForm();

		// Module, token and currentIndex
		$helper->module = $this;
		$helper->name_controller = $this->name;
		$helper->token = Tools::getAdminTokenLite('AdminModules');
		$helper->currentIndex = AdminController::$currentIndex.'&configure='.$this->name;

		// Language
		$helper->default_form_language = $default_lang;
		$helper->allow_employee_form_lang = $default_lang;

		// Title and toolbar
		$helper->title = $this->display_name;
		$helper->show_toolbar = true;        // false -> remove toolbar
		$helper->toolbar_scroll = true;      // yes - > Toolbar is always visible on the top of the screen.
		$helper->submit_action = 'submit'.$this->name;
		$helper->toolbar_btn = array(
			'save' => array(
				'desc' => $this->l('Save'),
				'href' => AdminController::$currentIndex.'&configure='.$this->name.'&save'.$this->name.
				'&token='.Tools::getAdminTokenLite('AdminModules'),
			),
			'back' => array(
				'href' => AdminController::$currentIndex.'&token='.Tools::getAdminTokenLite('AdminModules'),
				'desc' => $this->l('Back to list')
			)
		);

		// Load current value
		$helper->fields_value['DRAGANDDROP_NAME'] = Configuration::get('DRAGANDDROP_NAME');

		return $helper->generateForm($fields_form);
	}

}
?>