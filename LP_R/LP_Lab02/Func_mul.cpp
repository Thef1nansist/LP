#include"Header.h"
using namespace std;
int mul() {
	int value1, value2, mul;
	printf("Введите два числа: \n");
	cin >> value1 >> value2;
	mul = value1 * value2;
	printf("Произведение ваших чисел равна: %d\n ", mul);
	return mul;
}