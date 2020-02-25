	/*.....................................задание 1*/

function exercise1() {
	alert("Здравствуйте, вас приветствует учебный центр!");
	var name = prompt("Введите имя", "имя");
	alert("Добро пожаловать на наши курсы, " + name);
	var answer = confirm("Хотите стать дизайнером?");
		if (answer) {
			alert("Учите стили CSS и JavaScript!")
		} else {
			alert("Упускаете время!");
		};
};


	/*...................................задание 2*/

/*Вопрос: Как записать h2 и p через объекты и методы?*/

function exercise2() {
	document.write("<style>body{background-color: Azure} h2{color:red; font-size:30px; " + 		//	Гарнитура -- стиль шрифта	Кегль -- размер	шрифта
				   "font-family:Helvetica} p{ font-family:Verdana; font-size:15px}</style>");	//	был вынужден так написать	(вину не отрицаю)
	document.write("<h2>Задание 2</h2>");
	document.write("<p>",10+5,"</p>");
	document.write("<p>","10" + "5","</p>");
	document.write("<p>","10" + 5,"</p>");
	document.write("<p>",10 + "5","</p>");
	document.write("<p>Результатом сложения числа и строки всегда будет строка</p>");
};


/*function createElements(element, text, className) {
    let el = document.createElement(element);
    document.body.append(el);
    el.innerHTML = text;
    el.classList.add (className);
}

function add(a, b) {
    return a + b;
}

exercise2();

function exercise2() {
    let v1 = add(10, 5);
    let v2 = add("10", "5");
    let v3 = add(10, "5");
    let v4 = add("10", 5);

    createElements("p", v1, "ex2");
    createElements("p", v2, "ex2");
    createElements("p", v3, "ex2");
    createElements("p", v4, "ex2");

}*/


	/*...................................задание 3*/
function exercise3() {
	document.write("<style>body{background-color: Azure} h2{color:red; font-size:30px; " + 
				   "font-family:Helvetica} p{ font-family:Verdana; font-size:15px}</style>");
	document.write("<h2>Задание 3</h2>");
	var x = 5,
		y = 7;
	var result_1 = (12 * x - y) * 21 / 7,
		result_2 = (47 * x + 21 * y) /10 * 3;
	var result = result_2 % result_1;
	document.write("<p>(12 * x - y) * 21 / 7 = " + result_1.toFixed(2) + "</p>");	/*	.toFixed(кол-во символов после запятой) -- округляет число*/
	document.write("<p>(47 * x + 21 * y) /10 * 3 = " + result_2.toFixed(2) + "</p>");
	document.write("<p>Остаток от деления  = " + result.toFixed(2) + "</p>");
	alert("(12 * x - y) * 21 / 7 = " + result_1.toFixed(2) +			
		  "\r\n(47 * x + 21 * y) /10 * 3 = " + result_2.toFixed(2) + 		/*  \r - символ конца строки  */
	  	"\r\nОстаток от деления  = " + result.toFixed(2));				/*  \n -символ переноса на новую строку  */
};


	/*...................................задание 4*/ 

function exercise4() {
	var number = prompt("Введите число", "0");
		number = parseInt(number, 10);		/*	Превращает строку в число, иначе NaN*/
		if ((number != 10) && (number >= 2) && (number < 1100) || (number == 2000)) {
			alert("Правильное значение!")
		} else {
			alert("Не правильное значение!");
		}
};


	/*.................................задание 5*/

function exercise5() {
	var number_1 = prompt("введите первое число для 5 задания", "");
		number_2 = prompt("введите второе число для 5 задания", "");
		number_1 = parseInt(number_1, 10);
		number_2 = parseInt(number_2, 10);
	if (number_1 == number_2) {
		alert("Числа равны");
	} else if(number_1 > number_2) {
		alert("Первое число больше второго");
	} else {
		alert("Второе число больше первого")
	};

	alert(number_1 < 10?"Первое число меньше 10!":"Первое число больше 10!");
};


	/*..................................задание 6*/

function exercise6() {
	var number_of_day = prompt("Введите номер дня недели(1 - понедельник, 2 - вторник, ...)", "");
	switch(number_of_day) {
		case "1": alert("Сегодня же понедельник");
				  break;

		case "2": alert("Сегодня же вторник");
				  break;

		case "3": alert("Сегодня же среда");
				  break;

		case "4": alert("Сегодня же четверг");
				  break;

		case "5": alert("Сегодня же пятница");
				  break;

		case "6": alert("Сегодня же суббота");
				  break;

		case "7": alert("Сегодня же воскресенье");
				  break;

		default: alert("Некорректное значение");
				 break;
	};
};


	/*....................................задание 7*/

function exercise7() {
	try {
		var age = prompt("Сколько вам лет?", "");
			size = Parseint(size)
		atlert("Через два года вам будет " + age);
	} catch(e) {
		alert("У вас ошибка в коде");
	}
};
