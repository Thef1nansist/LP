let chekermax=0,chekermin=0;
function array(){
    let value1,value2,value3,value4,min,max;

    value1=Math.pow(Math.PI,2)+Math.pow(2.71,8);
    value2=2*Math.cos(4)+Math.cos(12)+8*Math.pow(2.71,3);
    value3=3*Math.sin(9)+Math.log10(5)+Math.sqrt(3);
    value4=2*Math.tan(5)+6*Math.PI+Math.sqrt(12);

    let array=[value1,value2,value3,value4];
        min=array[0];
        max=min;
    for(let i=1; i<array.length; i++) {

        if(array[i]>=max) {
            max=array[i];
            chekermax=i;
        }
        if(array[i]<min) {
            min=array[i];
            chekermin=i;
        }
    }

    document.writeln('Максимальное значение:<br> '+max);
    document.writeln('<br> Его номер: <br>'+( chekermax+1));
    document.writeln('<br>Минимальное значение: <br> '+min);
    document.writeln('<br> Его номер: <br>'+(chekermin+1));
}
function secondtask() {
   let arr=['pow','pop','push','shift','round', 'floor','sline','sort'];
    b=[];
    c=[];
    j = 0;
    k=0;
    for (var i=0;i<=7;i++) {
        if(arr[i]=='pow'||arr[i]=='round'||arr[i]=='floor') {
            b[k]=arr[i]; 
            k++;
        }else {
            c[j]=arr[i];
            j++;
        }
    }
    for (var i=0;i<k;i++) { 
        document.write(b[i] + "  ");
}
    document.write("<br>");

    for (var i=0;i<j;i++) { 
            document.write(c[i] + "  ");
    }

    document.write("<br>");
    newLength=b.push('PI');
    newbefor=c.unshift('unshift');

    for (var i=0;i<k+1;i++){ 
        document.write(b[i] + "  ");
}   

    document.write("<br>");

    for (var i=0;i<j+1;i++){ 
        document.write(c[i] + "  ");
}
    document.write("<br>");

    Lenthfirst=arr.length;
    LenthSecond=b.length;
    LenthThird=c.length;

    document.write("Длинна Первого массива: "+Lenthfirst);
    document.write("<br>");
    document.write("Длинна Второго массива: "+ LenthSecond);
    document.write("<br>");
    document.write("Длинна Третьего массива: "+LenthThird);


}
function thirdtask(){
    mystring=new String('Савченко Владислав Юрьевич:<br>');
    document.write("<br>Длинна строки: <br> "+mystring.length);
    document.write("<br>Все числа в верхнем регистре: <br>"+mystring.toUpperCase());
    document.write("<br>Все числа в нижнем регистре: <br>"+mystring.toLowerCase());
    str='Савченко ';
    str1='Савченко Владислав Юрьевич';
    document.write(str.concat('Владислав Юрьевич <br>'));
    document.write(str1.replace('Савченко Владислав Юрьевич','С.В.Ю.'))
}
function Fourthtask() {
    x=new Date();
    y= parseInt(x.getMonth())+1;
    
    var s = '<table border=\"4px\" width=\"1000px\" align=\"center\" cellspacing=\"5px\" cellpadding=\"4px\">';
    s += "<tr><td>Год</td><td>" + x.getFullYear(); "</td></tr>";
    s += "<tr><td>Месяц</td><td>" + y + "</td></tr>";
    s += "<tr><td>День</td><td>" + x.getDay(); "</td></tr>";
    s += "<tr><td>Час</td><td>" + x.getHours(); "</td></tr>";
    s += "<tr><td>Минута</td><td>" + x.getMinutes(); "</td></tr>";
    s += "<tr><td>Секунда</td><td>" + x.getSeconds(); "</td></tr>";
    document.write(s + "</table>");
}
////////ЛАБА4 Пользовательские объекты JS. Специальные операторы
       /* function MyObject1(){
        let n,spec,kolich;
        function Gruppa(n,spec,kolich){
        this.n=n;
        this.spec=spec;
        this.kolich=kolich;
        this.add_stud=function add_stud(k) {
        this.kolich+=k;
           document.write('Вгруппу ' + this.n + ' добавили'+ k + 'студентов.<br\>');
        }
            }
            gr1=Gruppa(2, 'ИСиТ', 28);
           
            Gruppa.prototype.kurs=this.kurs;
            gr1.['kurs']=2;
            document.write(gr1.n,gr1.spec, gr1.kolich, gr1.kurs);

        }*/
