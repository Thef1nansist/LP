#include <stdio.h>
#include <conio.h>
#include <string.h>
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    int val, number;

    ifstream fin("f.txt");
    ofstream fout("g.txt");

    cout << "number="; cin >> number;

    if (fin.is_open())
    {
        while (fin >> val)
        {
            if (val > number) fout << val << " ";
        }
        fin.close();
    }
    else cout << "Unable to open file\n";
    fout.close();

    system("pause");
    return 0;
}