#include "Header.h"

int main()
{
    setlocale(LC_CTYPE, "Rus");
	int n;
	while (true) {
		printf("Введиде номер задание:\n1)Сумма;\n2)Разность;\n3)Произведение;\n4)Выход\n");
		std::cin >> n;
		switch (n) {
		case 1:
			sum();
			break;
		case 2:
			sub();
			break;
		case 3:
			mul();
			break;
		case 4:
			return 0;
		default:
			printf("Неверный номер,повторите попытку снова");
		}
	}
}
