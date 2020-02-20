#include "Find1.h"
#include <iostream>
using namespace std;
int FindNum(int Day, int Mounth, bool leapYear) {
	int numDays = Day;
	for (int i = 1; i < Mounth; i++) {
		if (i == 4 || i == 6 || i == 9 || i == 11)
			numDays += 30;
		else if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12)
			numDays += 31;
		else if (i == 2 && leapYear == false)
			numDays += 28;
		else if (i == 2 && leapYear == true)
			numDays += 29;
		}
	return numDays;
}