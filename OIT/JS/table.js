function CreateTable() {
var agree = confirm("Создаем таблицу для задания 2?");
if (agree){
	var a = prompt("Введите a(строки)", "");
	var b = prompt("Введите b(столбцы)", "");
		a = parseInt(a);
		b = parseInt(b);
	var table, row, cell, i, j;
	    table = document.createElement('table');
	        table.style.textAlign = 'center';
	        table.style.fontFamily = 'Arial';
	        for (i = 0; i <= a; i++) {
            row = document.createElement('tr');
            for (j = 0; j <= b; j++) {
                cell = document.createElement('td');
                if (i == 0 || j == 0) {
	            		cell = document.createElement("th");
	            		let maincell = cell;
	            		maincell.classList.add("external");
	            	}
                if (i == 0)
                    cell.appendChild(document.createTextNode(j || " "));
                else if (j == 0)
                    cell.appendChild(document.createTextNode(i));
                else
                    cell.appendChild(document.createTextNode(i * j));
                cell.style.padding = "4px";
                cell.style.width = "50px";
                cell.style.border = "1px black solid";
                row.appendChild(cell);

            }
            	table.appendChild(row);
        	}
        
    }   
    document.body.appendChild(table);	/*	append - присоединить	*/
}
CreateTable();
