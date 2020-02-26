#include <stdlib.h>
#include <stdio.h>
#define _CRT_SECURE_NO_WARNINGS
#pragma warning(disable: 4996)

int main()
{
	char s[1024] = { 0 };
	int c;
	bool write;

	FILE* f1 = fopen("f1.txt", "r"); //открываем файлы
	FILE* f2 = fopen("f2.txt", "w");

	if (f1 == NULL || f2 == NULL) //если файла нет
	{
		printf("files error\n");
		return -1;
	}

	while (fgets(s, sizeof(s), f1)) // пока есть символы, выполняется цикл
	{
		write = 0; // изначально false

		for (int i = 0; *(s + i) != 0; i++)
			if (*(s + i) == 'A') //проверка символа
				write = 1; //если число, то true
		if (write) //если true, то записываем
			fputs(s, f2);

	}

	fclose(f1); //закрываем файлы
	fclose(f2);
}