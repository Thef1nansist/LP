const cvs = document.getElementsByTagName('canvas')[0];
const ctx = cvs.getContext('2d');

document.forms[0].addEventListener('change', e => {
	switch (+e.target.value) {
		case 1:
			f1();
			break;
		case 2:
			f2();
			break;
		case 3:
			f3();
			break;
		case 4:
			f4();
			break;
	}
});

document.forms[1].addEventListener('change', e => {
	ctx.strokeStyle = e.target.value;
})

function f1() {
	console.clear();
	console.log('y = x^2');
	ctx.clearRect(0, 0, cvs.width, cvs.height)
	let scale = 20;
	let x;
	let y;
	ctx.beginPath();
	for (x = -cvs.width / 2; x <= cvs.width / 2; ++x) {
		y = Math.pow(x, 2) / scale;
		ctx.lineTo(150 + x, 300 - y);
	}
	ctx.stroke();
}

function f2() {
	console.clear();
	console.log('y = x^3');
	ctx.clearRect(0, 0, cvs.width, cvs.height)
	let scale = 3000;
	let x;
	let y;
	ctx.beginPath();
	for (x = -cvs.width / 2; x <= cvs.width / 2; ++x) {
		y = Math.pow(x, 3) / scale + cvs.height / 2;
		ctx.lineTo(150 + x, 300 - y);
	}
	ctx.stroke();
}

function f3() {
	console.clear();
	console.log('y = sin(x)');
	ctx.clearRect(0, 0, cvs.width, cvs.height)
	let x;
	let y;
	let amplitude = 100;
	let scale = 50;
	ctx.beginPath();
	for (x = 0; x <= cvs.width; ++x) {
		y = (Math.sin(x / scale) * amplitude + cvs.height / 2);
		ctx.lineTo(x, y);
	}
	ctx.stroke();
}

function f4() {
	console.clear();
	console.log('y = cos(x)');
	ctx.clearRect(0, 0, cvs.width, cvs.height)
	let x;
	let y;
	let amplitude = 100;
	let scale = 50;
	ctx.beginPath();
	for (x = 0; x <= cvs.width; ++x) {
		y = (Math.cos(x / scale) * amplitude + cvs.height / 2);
		ctx.lineTo(x, y);
	}
	ctx.stroke();
}