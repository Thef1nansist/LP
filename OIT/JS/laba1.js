let one,two,rezult,value1,value2,znach1,znach2,ost,num1,num2,A,B,theDay;
    function fun1(){
        alert("Вас приветствует учебный центр");


        z=prompt('Введите имя:', 'Имя');
        document.getElementById('First').innerHTML = 'Здравствуйте, '+ z;

    
    if(confirm('Хотите стать Web-дизайнером?'))  {
        alert("Учите стили CSS и JavaScript!")
    }
    else{
        alert("Упускаете время!")
    }
}
    function fun4 () {
        one=5;
        two=10;
        rezult=one+two;
        document.getElementById('Second').innerHTML='Результат равен, '+rezult;
    }
    function fun5() {
        one='5';
        two='10';
        rezult=one+two;
        document.write('Результат равен, '+rezult);
    }
    function fun6 () {
        one=22;
        two='10';
        rezult=one+two;
        document.write('Результат равен, '+rezult);
    }
    function fun7 () {
        one='22';
        two=10;
        rezult=one+two;
        document.write('Результат равен, '+rezult);
    }   
    function fun8 () {
       alert('Результатом сложения строки и числа всегда будет строка')
    }   
    function fun9(){
        value1=2;
        value2=40;
        znach1=(35*value1-25*value2)/5+232;
        znach2=(8*value1/value2+5*value2/value1-43)*6;
        ost=znach1%znach2;
        document.write('Значение первое: '+znach1,'  Значение второго: '+znach2,' Остаток равен: '+ost);
        alert('Значение первое: '+znach1);
        alert('Значение второго: '+znach2);
        alert('Остаток равен: '+ost);
    }
    function fun10(){
       num1= prompt('Введите значение','');
        if((num1<20||num1>40)&&num1!=15&&num1%5==0){
            alert('Правильное значение');
        }
        else{
            alert('Не правильное значение');
        }
        }
    function fun11(){
        num2= prompt('Введите значение','');
        if(num2>10&&num2!=20&&num2%2==0){
            alert('Правильное значение');
        }
        else{
            alert('Не правильное значение');
        }
             }
    function fun12(){
        A= prompt('Введите значение первого числа','');
        B= prompt('Введите значение второго числа','');
        if(A>B){
            alert('Первое больше');
        }
        else if(A<B){
            alert('Второе больше');
        }
        else{
            alert('Значения равны');
        }
    }
    function fun13(){
        A= prompt('Введите значение первого числа','');
        B= prompt('Введите значение второго числа','');
        C=prompt('Введите значение третьего числа','');
        if(A>B&&A>C){
            alert('Первое больше');
        }
        else if(A<B&&C<B){
            alert('Второе больше');
        }
        else if(A<C&&B<C){
            alert('Третье больше');
        }
        else if(A>C&&B<C){
            alert('Первое больше');
        }
        else if(A<C&&B>C){
            alert('Второе больше');
        }
        else if(A==C&&B<C){
            alert('Первое и третье больше');
        }
        else if(A<C&&B==C){
            alert('Третье и второе больше');
        }
        else{
            alert('Значения равны');
        }
    }
    function fun14(){
        theDay=prompt('Введите число','');
            switch(theDay){
            case '0':
                alert('Воскресенье');
            break;
            case '1':
                alert('Понедельник');
            break;
            case '2':
                alert('Вторник');
            break; 
            case '3':
                alert('Среда');
            break; 
            case '4':
                alert('Четверг');
            break;
            case '5':
                alert('Пятница');
            break;      
            case '6':
                alert('Суббота');
            break;
            default:
                alert('Не Верное значение!!!');
        }
    }
function Catch(){
    try{
        document.getElementById('LastTask').innerHTML = 'Firts String' + '<br>';
        document.getElementById('LastTask').innerHTML += 'Second String';
    } catch{
        document.getElementById('LastTask').innerHTML = 'Theres a error in code!';
    }
}
//Лаба5
var all = document.getElementsByTagName('all');
console.log(all.tagName);