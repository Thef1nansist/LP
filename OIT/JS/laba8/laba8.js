       
       let one = document.getElementById('one');
        one.onmouseover = function () {
        one.style.color = "red";
    }

    function two() {
        let two = document.getElementById("two");
        two.style.fontSize = "50px";
    }


    function four () {
        let four = document.getElementById("four");
        four.innerHTML = "<img id='four' src='picture.jpg' width= '200px' height = '100px'>";
     
    }
    
    let three = document.getElementById("pictr");
    three.onclick= function(){

        three.src = "picture2.jpg";
        three.style.width = "300px";
        three.style.height = "300px";
    }

    let five = document.getElementById("pictr");
    five.onmouseover = function () {
        five.style.width = "400px";
        five.style.height = "400px";
    }
    five.onmouseout = function () {
        five.style.width = "300px";
        five.style.height = "300px";
    }

//lastTask
let last = document.getElementById ("last");
last.ondblclick = function () {
last.style.border = "3px solid red";
}