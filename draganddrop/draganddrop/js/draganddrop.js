function dnd_clear_tr() {
	var dndTopRightImg = document.getElementById('dnd-top-right-img');
	var dndTopRightText = document.getElementById('dnd-right-text');
	
	dndTopRightImg.style.backgroundImage = 'none';
	dndTopRightText.innerHTML = 'Cliquez sur un élément de l\'image pour le vérrouiller';
}

document.addEventListener('DOMContentLoaded', function() {
	var selectIsOn = true;

	var dndMain = document.getElementById('dnd-main-img');
	var dndTopRight = document.getElementById('dnd-top-right');
	var dndTopRightImg = document.getElementById('dnd-top-right-img');
	var dndTopRightText = document.getElementById('dnd-right-text');
	var dndTopRightPrice = document.getElementById('dnd-right-price');
	var dndBottomRight = document.getElementById('dnd-bottom-right');

	var sceneElements = [];
		sceneElements[0] = document.getElementById('dnd-tapis');
		sceneElements[1] = document.getElementById('dnd-canape1');
		sceneElements[2] = document.getElementById('dnd-canape2');
		sceneElements[3] = document.getElementById('dnd-table');
		sceneElements[4] = document.getElementById('dnd-lampadaire');
		sceneElements[5] = document.getElementById('dnd-bougeoir');
	
	var sceneLinks = [];
		sceneLinks[0] = 'url(http://monkeyisback.com/shop/modules/draganddrop/img/tapis.jpg)';
		sceneLinks[1] = 'url(http://monkeyisback.com/shop/modules/draganddrop/img/canape.jpg)';
		sceneLinks[2] = 'url(http://monkeyisback.com/shop/modules/draganddrop/img/canape.jpg)';
		sceneLinks[3] = 'url(http://monkeyisback.com/shop/modules/draganddrop/img/table_appoint.jpg)';
		sceneLinks[4] = 'url(http://monkeyisback.com/shop/modules/draganddrop/img/lampadaire.jpg)';
		sceneLinks[5] = 'url(http://monkeyisback.com/shop/modules/draganddrop/img/bougeoir.jpg)';

	var sceneDescription = [];
		sceneDescription[0] = 'Tapis, Vente de Tapis, par Vendeur de Tapis.';
		sceneDescription[1] = 'Canape, On aime s\'assoir dedans.';
		sceneDescription[2] = 'Canape, On aime s\'assoir dedans.';
		sceneDescription[3] = 'Table Basse pour toute la famille';
		sceneDescription[4] = 'lampadaire';
		sceneDescription[5] = 'BOUGEOIR SWAG YOLOWWW';

	var sceneIDProduct = [];
		sceneIDProduct[0] = 1;
		sceneIDProduct[1] = 2;
		sceneIDProduct[2] = 2;
		sceneIDProduct[3] = 3;
		sceneIDProduct[4] = 4;
		sceneIDProduct[5] = 5;

	var scenePrice = [];
		scenePrice[0] = '300,00€';
		scenePrice[1] = '2300,00€';
		scenePrice[2] = '2300,00€';
		scenePrice[3] = '80,00€';
		scenePrice[4] = '539,00€';
		scenePrice[5] = '1,00€';

	// main
	dndMain.addEventListener('mouseover', function() {
		if (selectIsOn) {
			dnd_clear_tr();
		}
	}, false);
	dndTopRight.addEventListener('mouseover', function() {
		if (!selectIsOn) {
			selectIsOn = true;
			document.getElementById('dnd-cadenas').getElementsByTagName('img')[0].style.display = 'none';
		}
	}, false);

	
	dndBottomRight.addEventListener('dragover', function(e) {
		if (e.preventDefault) e.preventDefault(); // allows us to drop
		this.className = 'over';
		e.dataTransfer.dropEffect = 'copy';
	}, false);
	
	dndBottomRight.addEventListener('dragenter', function(e) {
		this.className = 'over';
		return false;
	}, false);
	
	dndBottomRight.addEventListener('dragleave', function(e) {
		this.className = '';
	}, false);
	
	dndBottomRight.addEventListener('drop', function (e) {
		if (e.stopPropagation) {
			e.stopPropagation(); // Stops some browsers from redirecting.
		}
		ajaxCart.add(e.dataTransfer.getData('Text'), null, true, null, 1, null); ajaxCart.refresh();
	}, false);
	
	dndMain.addEventListener('mousedown', function() {
		selectIsOn = true;
		document.getElementById('dnd-cadenas').getElementsByTagName('img')[0].style.display = 'none';
	}, false);
	
	for (var i = 0; i < sceneElements.length; i++) {
		sceneElements[i].elmNumber = i
		sceneElements[i].addEventListener('mouseover', function() {
			if (selectIsOn) {
				dndTopRightImg.style.backgroundImage = sceneLinks[this.elmNumber];
				dndTopRightText.innerHTML = sceneDescription[this.elmNumber];
				dndTopRightImg.setAttribute('draggable', 'true');
				dndTopRightImg.elmNumber = sceneIDProduct[this.elmNumber];
				dndTopRightPrice.innerHTML = scenePrice[this.elmNumber];
				dndTopRightImg.addEventListener('dragstart', function(e) {
					e.dataTransfer.effectAllowed = 'copy';
					e.dataTransfer.setData('Text', this.elmNumber);
				}, false);
			}
		}, true);
		
		sceneElements[i].addEventListener('mouseup', function() {
			selectIsOn = false;
			document.getElementById('dnd-cadenas').getElementsByTagName('img')[0].style.display = 'block';
		}, true);
	}
	
}, true);