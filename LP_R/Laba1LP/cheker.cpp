#include "cheker1.h"
#include<iostream>
using namespace std;
bool LeapYear(int Year) {
	if (Year % 4 == 0)
		return true;
	else
		return false;
}

