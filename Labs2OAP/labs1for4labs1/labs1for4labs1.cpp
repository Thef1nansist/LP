#include <iostream> 
#include "windows.h" 

using namespace std;

int main() {
	SetConsoleOutputCP(1251);
	SetConsoleCP(1251);

	FILE* fA, * fB;
	errno_t error;
	error = fopen_s(&fA, "fA1.txt", "w");
	if (error != 0) {
		perror("Ошибка открытия файла fA1.txt");
		return EXIT_FAILURE;
	}

	fprintf_s(fA, "%d %d %d %d %d %d %d %d %d", 3, 4, 5, 2, 3, 4, 1, 2, 3);

	fclose(fA);

	//Открытие файла A, определения размера матрицы A 
	error = fopen_s(&fA, "fA1.txt", "r");
	if (error != 0) {
		perror("Ошибка открытия файла fA1.txt");
		return EXIT_FAILURE;
	}

	int columnsA;
	fscanf_s(fA, "%d ", &columnsA);

	//Открытие файла B, определения размера матрицы B 
	error = fopen_s(&fB, "fB.txt", "r");
	if (error != 0) {
		perror("Ошибка открытия файла fB.txt");
		return EXIT_FAILURE;
	}

	int columnsB;
	fscanf_s(fB, "%d ", &columnsB);
	cout << columnsB << endl;

	//Создание и открытие для записи файла C 
	FILE* fC;
	error = fopen_s(&fC, "fC.txt", "w");
	if (error != 0) {
		perror("Ошибка открытия файла fC.txt");
		return EXIT_FAILURE;
	}

	//Выделение памяти под матрицу А 
	int** msA = new int* [columnsA];
	for (int i = 0; i < columnsA; ++i)
		msA[i] = new int[columnsA];

	fclose(fA);
	fclose(fB);
	error = fopen_s(&fB, "fB.txt", "r");
	error = fopen_s(&fA, "fA1.txt", "r");

	//Чтение матрицы А из файла 
	for (int i = 0; i < columnsA; ++i)
		for (int j = 0; j < columnsA; ++j)
			fscanf_s(fA, "%d ", &msA[i][j]);

	//Выделение памяти под матрицу В 
	int** msB = new int* [columnsB];
	for (int i = 0; i < columnsB; ++i)
		msB[i] = new int[columnsB];

	//Чтение матрицы B из файла 
	for (int i = 0; i < columnsB; ++i)
		for (int j = 0; j < columnsB; ++j)
			fscanf_s(fB, "%d", &msB[i][j]);

	//Выделение памяти под матрицу C 
	int** msC = new int* [columnsA];
	for (int i = 0; i < columnsA; ++i)
		msC[i] = new int[columnsB];

	//Заполнение матрицы C нулями 
	for (int i = 0; i < columnsA; ++i)
		for (int j = 0; j < columnsB; ++j)
			msC[i][j] = 0;

	//Перемножение матриц A и B, вывод матрицы С в файл fC 
	for (int j = 0; j < columnsA; ++j) {
		for (int k = 0; k < columnsB; ++k) {
			for (int i = 0; i < columnsA; ++i)
				msC[j][k] += msA[j][i] * msB[i][k];
			fprintf(fC, "%d ", msC[j][k]);
		}
		fprintf(fC, "\n");
	}

	return 0;
}