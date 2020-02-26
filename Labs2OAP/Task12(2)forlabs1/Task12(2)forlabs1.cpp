#include <stdio.h>
#include <iostream>
#include <ctime>
int main() {
	setlocale(LC_CTYPE, "Russian");
	FILE* A, * B, * C, * D; int rmin = 1, rmax = 20; //указатели на файлы для считывания и записи
	errno_t err; int i;
	int a[10], b[10], c[10], d[10];
	srand((unsigned)time(0));
	err = fopen_s(&A, "NameA.txt", "w");// откроем файл для записи исходных знач
	if (err != 0)
	{
		perror("Невозможно создать файл\n");
		return EXIT_FAILURE;
	}
	for (i = 0; i < 10; i++)
	{
		a[i] = (int)(((double)rand() / (double)RAND_MAX) * (rmax - rmin) + rmin);

		fprintf(A, "%d, ", a[i]);
	}

	err = fopen_s(&B, "NameB.txt", "w");// откроем файл для записи исходных знач
	if (err != 0)
	{
		perror("Невозможно создать файл\n");
		return EXIT_FAILURE;
	}
	for (i = 0; i < 10; i++)
	{
		b[i] = (int)(((double)rand() / (double)RAND_MAX) * (rmax - rmin) + rmin);

		fprintf(B, "%d, ", b[i]);
	}

	err = fopen_s(&C, "NameC.txt", "w");// откроем файл для записи исходных знач
	if (err != 0)
	{
		perror("Невозможно создать файл\n");
		return EXIT_FAILURE;
	}
	for (i = 0; i < 10; i++)
	{
		c[i] = (int)(((double)rand() / (double)RAND_MAX) * (rmax - rmin) + rmin);

		fprintf(C, "%d, ", c[i]);
	}


	err = fopen_s(&D, "NameD.txt", "w");// откроем файл для записи исходных знач
	if (err != 0)
	{
		perror("Невозможно создать файл\n");
		return EXIT_FAILURE;
	}
	for (i = 0; i < 10; i++)
	{
		if (a[i] < b[i] && a[i] < c[i])

			fprintf(D, "%d,", a[i]);
		else if (b[i] < a[i] && b[i] < c[i])
			fprintf(D, "%d,", b[i]);
		else if (c[i] < a[i] && c[i] < a[i])
			fprintf(D, "%d,", c[i]);

	}
	fclose(A);
	fclose(B);
	fclose(C);
	fclose(D);
	return 0;
}
