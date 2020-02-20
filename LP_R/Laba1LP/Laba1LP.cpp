#include <iostream>
#include <stdio.h>
#include <sstream>
#include "cheker1.h"
#include "Find1.h"


using namespace std;

int main() {
	setlocale(LC_ALL, "Rus");
	//Инициализирую переменные
	const char Zero = '0';
	string Day1, Mounth1, Year1;
	int Day, Mounth, Year, daysnum;
	//Enter value
there:
	printf("Введите День, Месяц и Год:\n");
	cin >> Day1 >> Mounth1 >> Year1;

	//Преобразование даты
	stringstream TempDay(Day1);
	TempDay >> Day;
	stringstream TempMonth(Mounth1);
	TempMonth >> Mounth;
	stringstream TempYear(Year1);
	TempYear >> Year;

	//Find Error
	if (Day < 1 || Day>31 || Mounth < 1 || Mounth>12 || Year < 0) {
		printf("Не правильный формат,измените формат даты\n\n\t");
		goto there;
	}
	if (!LeapYear(Year) && Mounth == 2 && Day > 28) {
		printf("Не правильный формат,измените формат даты\n\n\t");
		goto there;
	}
	if (LeapYear(Year) && Mounth == 2 && Day > 29) {
		printf("Не правильный формат,измените формат даты\n\n\t");
		goto there;
	}
	
	//conclusion
	printf("\n");
	if (Day >= 1 && Day <= 9) {
		printf("%c%d.", Zero, Day);
	}
	else {
		printf("%d.", Day);
	}
	if (Mounth >= 1 && Mounth <= 9) {
		printf("%c%d.", Zero, Mounth);
	}
	else {
		printf("%d.", Mounth);
	}
	printf("%d\n", Year);

	//chek dateleap and find num
	if (LeapYear(Year)) {
		daysnum = FindNum(Day, Mounth, (LeapYear(Year)));
		printf("\n %d является весокосным годом\n Порядковый номер дня: %d\n" ,Year,daysnum);
	}
	else {
		daysnum = FindNum(Day, Mounth, (LeapYear(Year)));
		printf("\n%d не является високосным годом\n\nПорядковый номер дня в году: %d\n", Year, daysnum);

	}
}