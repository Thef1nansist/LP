var agree = confirm("Создаем таблицу для задания 3?");
if (agree){
function createTable() {
    var a; 
    var b; 
    var leng_of_circle; // длина окружности
       var area_of_circle; // площадь 
       a = +prompt("Введите a: "); 
       if (isNaN(a)) {
         alert("Строка преобразовалась в NaN. Не число");
        return;
        }
 
        b = +prompt("Введите b: "); 
        if (isNaN(b)) {
            alert("Строка преобразовалась в NaN. Не число");
            return;
        }
 
        var s = '<table border=\"3px\" width=\"600px\" align=\"center\" cellspacing=\"4px\" cellpadding=\"2px\"> <tr><td bgcolor=\"green\">Радиус</td> <td bgcolor=\"blue\">Длина окружности</td> <td bgcolor=\"red\">Площадь окружности</td> </tr>';
        do {
            leng_of_circle = Math.round(2 * 3.14 * a);
            area_of_circle = Math.round(3.14 * a * a);
            s += "<tr><td>" + a.toFixed(1) + "</td><td>" + leng_of_circle + "</td><td>" + area_of_circle + "</td></tr>";
            a = a + 0.3; 
        } while (a <= b);
        document.write(s + "</table>");
    }
}
createTable(); 
