#include"Header.h"
using namespace std;
int sub() {
	int value1, value2, sub;
	printf("Введите два числа: \n");
	cin >> value1 >> value2;
	sub = value1 - value2;
	printf("Разность ваших чисел равна: %d\n ", sub);
	return sub;
}