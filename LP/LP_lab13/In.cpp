#include "Parm.h"
#include "Error.h"
#include "In.h"
#include <iostream>
#include <clocale>
#include<fstream>
#include <sstream>

using namespace Error;
using namespace std;

In::IN In::getin(wchar_t infile[], wchar_t outfile[])
{
	ifstream stream(infile);
	ofstream outpurFile(outfile);

	IN in;
	in.size = 0;
	in.lines = 0;
	in.ignor = 0;
	int table[] = IN_CODE_TABLE;
	in.text = new unsigned char[IN_MAX_LEN_TEXT];
	int col = 0;
	char ch;
	string tmpString = "";
	bool flag = false;

	int writePosition = 0;

	if (stream.is_open())
	{
		while (!stream.eof())
		{
			stream.get(ch);
			in.size++;
			if ((unsigned char)ch == IN_CODE_CPACE && in.text[writePosition - 1] == IN_CODE_CPACE) {
				if (table[(unsigned char)ch] == IN::S) {
					in.ignor++;
				}
				continue;
			}
			if ((unsigned char)ch == IN_CODE_ENDL) {
				in.lines++;
				if (in.text[writePosition - 1] == IN_CODE_ENDL) 
					continue;
 				in.text[writePosition] = IN_CODE_SL;
				col = 0;
				writePosition++;
			}
			if ((unsigned char)ch == IN_CODE_CPACE && table[(unsigned char)in.text[writePosition - 1]] == IN::A) {
				in.ignor++;
				continue;
			}
			if ((unsigned char)ch == (unsigned char)39)
			{
				if (flag == true)
					flag = false;
				else
					flag = true;
			}
			if (flag == true)
			{
				in.text[writePosition] = ch;
				col++;
				writePosition++;
				continue;
			}

			if (table[(unsigned char)ch] == IN::A)
			{
				if (in.text[writePosition - 1] == IN_CODE_CPACE)
				{
					in.text[writePosition - 1] = ch;
					col--;
				}
				else
				{
					in.text[writePosition] = ch;
					col++;
					writePosition++;
					continue;
				}
			}
			else if (table[(unsigned char)ch] == IN::T|| table[(unsigned char)ch] == IN::S)
			{
				in.text[writePosition] = (unsigned char)ch;
				writePosition++;
			}
			else if (table[(unsigned char)ch] == IN::F)
			{
				throw ERROR_THROW_IN(111, in.lines, col);
			}
			else if (table[(unsigned char)ch] == IN::I)
			{
				in.ignor++;
			}
			else if ((unsigned char)ch == IN_CODE_ENDL && in.text[writePosition - 1] == IN_CODE_SL)
				continue;
			
			else
			{
				in.text[writePosition] = table[(unsigned char)ch];
				writePosition++;
			}
			col++;
		}
	}
	else
	{
		throw ERROR_THROW(110);
	}
	in.text[writePosition-1] = IN_CODE_SL;
	writePosition++;
	in.lines++;
	in.text[writePosition-1] = '\0';

	stream.close();
	outpurFile << in.text;
	outpurFile.close();
	return in;
}