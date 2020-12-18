#pragma once
#include <fstream>
#include "stdafx.h"
#include <iostream>
#include <locale>
#include <cwchar>
#include <tchar.h>
#include <iomanip>
#include "Error.h"
#include "Parm.h"
#include "In.h"
#include "Parm.h"
namespace Log
{
	struct LOG
	{
		wchar_t logfile[PARM_MAX_SIZE]; // ��� ����� ���������
		std::ofstream* stream; //�������� ����� ���������
	};

	static const LOG INITLOG = { L"", NULL }; // ��������� ��� ��������� �������������
	LOG getlog(wchar_t logfile[]); // ������������ ��������� 
	void WriteLine(LOG log, char* c, ...); //������� � �������� ������������ �����
	void WriteLine(LOG log, const wchar_t* c, ...); // ���� �����, ��� � ����, ������ � wchar_t
	void WriteLog(LOG log); //����� � �������� ���������
	void WriteParm(LOG log, Parm::PARM parm); // ���������� � ������� ���������� 
	void WriteIn(LOG log, In::IN in); // ���� � ������� ������
	void WriteError(LOG log, Error::ERROR error);  // ���� �� ������ 
	void Close(LOG log); // ������� ��������

}