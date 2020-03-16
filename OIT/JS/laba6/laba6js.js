var newWin, openedWindow;

function op1() {
    newWin = window.open("about:blank","First") ;
    
}
function cl1() {
    newWin.close();
}
function writecl1() {
    newWin.document.write('Этот текст был выведен с помощью JS first') ;
    newWin.document.write('Window 2:' + '</br>' + 'Имя окна: ' + newWin.name );
}

function openWindow() {
  openedWindow = window.open('about:blank',"Second") ;
}
function closeOpenedWindow() {
  openedWindow.close() ;
}
function writecl2() {
    openedWindow.document.write('Этот текст был здесь second') ;
    openedWindow.document.write('Window 2:' + '</br>' + 'Имя окна: ' +  openedWindow.name );
}
var s = '<table border=\"4px\" width=\"1000px\" align=\"center\" cellspacing=\"5px\" cellpadding=\"4px\">';
s += "<tr><td>Имя браузера</td><td>" + navigator.appVersion ; "</td></tr>";
s += "<tr><td>Название браузера</td><td>" + window.navigator.appName ; "</td></tr>";
s += "<tr><td>Кодовое название браузера</td><td>" + navigator.appCodeName ; "</td></tr>";
s += "<tr><td>OC</td><td>" + navigator.platform; "</td></tr>";
s += "<tr><td>Поддержка Java</td><td>" + navigator.javaEnabled(); "</td></tr>";
s += "<tr><td>Ширину экрана</td><td>" + screen.width; "</td></tr>";
s += "<tr><td>Высота экрана</td><td>" + screen.height; "</td></tr>";
s += "<tr><td>Глубина цвета</td><td>" + screen.colorDepth; "</td></tr>";
s += "<tr><td>Количество посещённых</td><td>" + History.length; "</td></tr>";
s += "<tr><td>URL</td><td>" + window.location.href; "</td></tr>";
s += "<tr><td>Путь к загруженному документу</td><td>" +  window.location.pathname; "</td></tr>";
s += "<tr><td>Имя домена</td><td>" +  window.location.host; "</td></tr>";

document.write(s + "</table>");
