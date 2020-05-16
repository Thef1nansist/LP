let gif = document.getElementById('Image');
let Text = document.getElementById('Text');

gif.onmousedown = function(elem) {
  gif.style.position = 'absolute';
  moveAt(elem);

  function moveAt(elem) {
    gif.style.left = elem.pageX - gif.offsetWidth / 2 + 'px';
    gif.style.top = elem.pageY - gif.offsetHeight / 2 + 'px';
  }

  document.onmousemove = function(elem) {
    moveAt(elem);
  }

  gif.onmouseup = function() {
    document.onmousemove = null;
  }

  gif.ondragstart = function() {
  	return false;
  }
}

Text.onmousedown = function(elem) {
  Text.style.position = 'absolute';
  moveAt(elem);

  function moveAt(elem) {
    Text.style.left = elem.pageX - Text.offsetWidth / 2 + 'px';
    Text.style.top = elem.pageY - Text.offsetHeight / 2 + 'px';
  }

  document.onmousemove = function(elem) {
    moveAt(elem);
  }

  Text.onmouseup = function() {
    document.onmousemove = null;
    Text.onmouseup = null;
  }

  Text.ondragstart = function() {
  return false;
  }
}

function HorizontMove(){
	let curPosX = 0;
	let n = 10; 
	let width = document.documentElement.clientWidth;
	let imgWidth = 100;
	let img1 = document.getElementById("Image");
	let interval = setInterval(move, 50);
	function move() {
	  img1.style.left = (curPosX += n) + "px";
	  if (curPosX == 300)
	  	clearInterval(interval);
	}
}

function SinMove(){
	let curPosX = 100;
	let curPosY = 200;
	let n = 10;
	let img1 = document.getElementById('Image');
	let topSin = 100;
	let Temp;
	let interval;
	interval = setInterval(move, 50);
	function move(){
		img1.style.left = (curPosX += n) + 'px';
		Temp = 50 * Math.sin(2 * curPosX + 10);
		img1.style.top = (curPosY += Temp) + 'px';
		if (curPosX == 500){
			clearInterval(interval);
			interval = setInterval(moveBack, 50);
			img1.style.top = 200 + 'px';
		}
	}
	function moveBack(){
		img1.style.left = (curPosX -= n) + 'px';
		if (curPosX == 100)
			clearInterval(interval);
	}
}
