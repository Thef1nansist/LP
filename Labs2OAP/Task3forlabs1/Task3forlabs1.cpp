#include <fstream>

int main(void) {
    std::ifstream fin("in.txt");
    if (!fin.is_open())
        return 1;

    std::ofstream fout("out.txt");
    int st[2] = { 0 };
    int n, i;

    fin >> n;
    st[n < 0] = 1;
    do {
        if (st[n < 0])
            fout << n << ' ';
        i = n < 0;
        while ((fin >> n) && st[n < 0]);
        st[i] = 0;
        st[n < 0] = 1;
    } while (!fin.eof());

    fin.close();
    fout.flush();
    fout.close();
    return 0;
}























//#include <stdio.h>
//#include <conio.h>
//#include <string.h>
//#include <stdlib.h>
//#include <iostream>
//int main()
//{
//    using namespace std;
//    setlocale(LC_ALL, "Russian");
//    FILE* fileA;
//    FILE* fileB;
//    int k, i = 0;
//    char str[255];
//    errno_t err;
//    err = fopen_s(&fileA, "fileA.txt", "r");
//    err = fopen_s(&fileB, "fileB.txt", "w");
//
//    for (int i = 0; i < 10 && fgets(str, 255, fileA) != NULL; i++)
//    {
//        if (str[i] * pow(-1, i))
//            fputs(str, fileB);
//    }
//
//    fclose(fileA);
//    fclose(fileB);
//}