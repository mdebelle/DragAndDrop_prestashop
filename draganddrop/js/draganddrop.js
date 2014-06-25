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

	dndBottomRight.addEventListener('drop', function () {
		// this/e.target is current target element.

		if (e.stopPropagation) {
			e.stopPropagation(); // Stops some browsers from redirecting.
		}

		// Don't do anything if dropping the same column we're dragging.
		// Set the source column's HTML to the HTML of the column we dropped on.
		alert('issi');
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
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
				dndTopRightImg.setAttribute('draggable', 'true');
				dndTopRightText.innerHTML = sceneDescription[this.elmNumber];
			}
		}, true);
		sceneElements[i].addEventListener('mouseup', function() {
			selectIsOn = false;
			document.getElementById('dnd-cadenas').getElementsByTagName('img')[0].style.display = 'block';
		}, true);
	}
	
}, true);