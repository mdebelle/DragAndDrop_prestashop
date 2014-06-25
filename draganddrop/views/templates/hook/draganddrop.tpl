{if $page_name == 'index'}
{$mainimg = 'main.jpg'}
	<!-- Block draganddrop -->
	<div id="dnd">
		<div id="dnd-main">
			<img src="{$link->getMediaLink("`$smarty.const._MODULE_DIR_`draganddrop/img/`$mainimg|escape:'htmlall':'UTF-8'`")}" alt="{$slide.legend|escape:'htmlall':'UTF-8'}" id="dnd-main-img" />
			<div id="dnd-tapis"><img src="http://monkeyisback.com/shop/modules/draganddrop/img/tapis.jpg" style="display:none" /></div>
			<div id="dnd-canape1"><img src="http://monkeyisback.com/shop/modules/draganddrop/img/canape.jpg" style="display:none" /></div>
			<div id="dnd-canape2"><img src="http://monkeyisback.com/shop/modules/draganddrop/img/canape.jpg" style="display:none" /></div>
			<div id="dnd-table"><img src="http://monkeyisback.com/shop/modules/draganddrop/img/table_appoint.jpg" style="display:none" /></div>
			<div id="dnd-lampadaire"><img src="http://monkeyisback.com/shop/modules/draganddrop/img/lampadaire.jpg" style="display:none" /></div>
			<div id="dnd-bougeoir"><img src="http://monkeyisback.com/shop/modules/draganddrop/img/bougeoir.jpg" style="display:none" /></div>
		</div>
		<div id="htmlcontent_top">
			<ul class="htmlcontent-home clearfix row">
				<li id="dnd-top-right">
					<div id="dnd-cadenas"><img src="http://monkeyisback.com/shop/modules/draganddrop/img/cadenas.png" style="display:none" /></div>
					<div id="dnd-top-right-img"></div>
					<div id="dnd-right-text">Cliquez sur un élément de l'image pour le vérrouiller</div>
				</li>
				<li id="dnd-bottom-right">
					<div id="dnd-cadenas"><img src="http://monkeyisback.com/shop/modules/draganddrop/img/kdi.jpg" style="position: relative; margin: 0 auto; width: 25%; left: 125px; top: 40px;" /></div>
					<div id="dnd-right-text">Glissez un élément vers cette zone pour l'ajouter au panier</div>
				</li>
			</ul>
		</div>
	</div>
	<!-- /Block draganddrop -->
{/if}
