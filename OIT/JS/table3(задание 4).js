var agree = confirm("Создаем таблицу для задания 4?");
if (agree){
function createTable() {
var int_number = new Number('4524'),
    float_number = new Number('876.54451');
var exp_int = int_number.toExponential(4),     
    fixed_int = int_number.toFixed(2),           
    precision_int = int_number.toPrecision(2),  /*  Параметр -- количество всего цифр, до и после точки.      Precision -- точность*/
    str_int = int_number.toString(10);

var exp_float = float_number.toExponential(4),      
    fixed_float = float_number.toFixed(2),           
    precision_float = float_number.toPrecision(2),
    str_float = float_number.toString(10);           /*  Параметр -- система счисления   */

var s = '<table border=\"4px\" width=\"1000px\" align=\"center\" cellspacing=\"5px\" cellpadding=\"4px\"> <tr><td bgcolor=\"gold\">Число</td> <td bgcolor=\"red\">Метод</td> <td bgcolor=\"blue\">Результат</td> <td bgcolor=\"green\">Описание метода</td></tr>';
            s += "<tr><td>" + int_number + "</td><td>" + "toExponential()" + "</td><td>" + exp_int + "</td>" + "<td>" + "Экспоненциальная форма, где параметр -- количество цифр после точки" + "</td></tr>";
            s += "<tr><td>" + int_number + "</td><td>" + "toFixed" + "</td><td>" + fixed_int + "</td>" + "<td>" + "Параметр -- фиксированное количество цифр после точки" + "</td></tr>";
            s += "<tr><td>" + int_number + "</td><td>" + "toPrecision" + "</td><td>" + precision_int + "</td>" + "<td>" + "Параметр -- количество всего цифр, до и после точки." + "</td></tr>";
            s += "<tr><td>" + int_number + "</td><td>" + "toString" + "</td><td>" + str_int + "</td>" + "<td>" + "возвращает строковое представление числа " + "</td></tr>";
            s += "<tr><td>" + float_number + "</td><td>" + "toExponential()" + "</td><td>" + exp_float + "</td>" + "<td>" + "Экспоненциальная форма, где параметр -- количество цифр после точки" + "</td></tr>";
            s += "<tr><td>" + float_number + "</td><td>" + "toFixed" + "</td><td>" + fixed_int + "</td>" + "<td>" + "Параметр -- фиксированное количество цифр после точки" + "</td></tr>";
            s += "<tr><td>" + float_number + "</td><td>" + "toPrecision" + "</td><td>" + precision_int + "</td>" + "<td>" + "Параметр -- количество всего цифр, до и после точки." + "</td></tr>";
            s += "<tr><td>" + float_number + "</td><td>" + "toString" + "</td><td>" + str_int + "</td>" + "<td>" + "возвращает строковое представление числа " + "</td></tr>";
        document.write(s + "</table>");
    }
}
createTable(); 
