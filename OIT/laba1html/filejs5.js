	
/*----------------------------------задание 1*/
function p_create(argument) {
	let p = document.createElement('p');
	document.body.appendChild(p);
	p.innerHTML = argument;
}

var agree = confirm("Выполняем задание 1?");
if (agree) {

var str = "",
	str_num = "";

	for (var i = 0; i < document.all.length; i++) {
		let list_childs = document.all[i].tagName;
			str += list_childs + " " + i + "<br>";
	}

	console.log(document.all);	/*	можно в консольке глянуть	*/
	p_create(str);

}
/*---------------------------------------------задание 2*/

var agree_2 = confirm("Выполняем задание 2?");
if (agree_2) {

	var str = '';

	for (var i = 0; i < document.body.childNodes.length; i++) {
		str += document.body.childNodes[i] + "<br>";
		console.log(document.body.childNodes[i]);	/*	в консоли подробнее	*/
	}

	p_create(str);
}

/*---------------------------------------------задание 3*/

var agree_3 = confirm("Выполняем задание 3?");
if (agree_3) {

	var span_1 = document.all[6].innerHTML;

	var	span_2 = document.getElementsByTagName("span");
		span_2 = span_2[0].innerHTML;

	var span_3 = document.getElementById("firstspan");
  //var span_3 = document.getElementsByClassName("colortext");
  //	span_3 = span_3[0].innerHTML;

  		span_3 = span_3.innerHTML;

	p_create("Через all:  " + span_1);
	p_create("Через TagName:  " + span_2);
	p_create("Через IdName:  " + span_3);
  //p_create("Через ClassName:  " + span_3);
}

/*-----------------------------------задание 4*/

var agree_4 = confirm("Выполняем задание 4?");
if (agree_4) {
	let mark_ph = document.getElementById("mark_ph").innerHTML,
		mark_math = document.getElementById("mark_math").innerHTML,
		mark_ALO = document.getElementById("mark_ALO").innerHTML,
		mark_OIT = document.getElementById("mark_OIT").innerHTML,
		mark_OAiP =  document.getElementById("mark_ph").innerHTML;

	Math.average_of_5 = function(mark1, mark2, mark3, mark4, mark5) {
	
	var arr = [mark1, mark2, mark3, mark4, mark5];
	var sum = 0;
	
	for (var i = 0; i < arr.length; i++) {
		sum += parseInt(arr[i]);	/*	для преобразования строки в число	*/
	}

	sum = sum / 5;
	var result = Math.round(sum);	/*	округляет до ближайшего целого	*/
	console.log(sum);
	return result;

	}

	let result = Math.average_of_5(mark_ph, mark_math, mark_ALO, mark_OIT, mark_OAiP);
	/*p_create("Средний балл = " + result);*/

	var second_span = document.getElementById("secondspan");
	
	second_span.innerHTML += result;	/*	Россию9	*/

			 

}