#include <iostream>

#include <windows.h>

#include <fstream>

#include <math.h>

#include <string>

using namespace std;

int main() {

	setlocale(LC_ALL, "rus");

	double* a = new double[200];

	int n = 0, k;

	char ins[100];

	cout << "Введите имя файла: ";

	cin.getline(ins, sizeof(ins));

	ifstream ifs(ins);

	if (ifs.fail()) { cout << "Ошибка открытия входного файла " << endl; cin.get(); return 1; }

	for (int i = 0; !ifs.eof(); i++) {

		ifs >> a[i];

		n++;

	}

	cout << "Введите число ";

	cin >> k;

	int p = 0;

	for (int i = 0; i < n; i++) {

		if (abs(a[i] - k) < abs(a[p] - k)) {

			p = i;

		}
	}

	cout << "Самое близкое по значению число : " << a[p] << endl << "Его номер: " << p + 1 << endl;

	system("pause");

	return 0;

}