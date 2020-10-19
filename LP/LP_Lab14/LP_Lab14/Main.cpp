#include "pch.h"

int _tmain(int argc, _TCHAR* argv[]) {
	setlocale(LC_ALL, "rus");

	Log::LOG log = Log::INITLOG;

	try {
		Parm::PARM parm = Parm::getparm(argc, argv);
		log = Log::getlog(parm.log);
		Log::Write(log, L"Тест:", L" без ошибок ", "\n", L"");
		Log::WriteLog(log);
		Log::WriteParm(log, parm);
		In::IN in = In::getin(parm.in, parm.out);
		Log::WriteIn(log, in);
		LT::LexTable lextable = LT::Create(in.size);
		IT::IdTable idtable = IT::Create(in.size);

		Log::Close(log);
		LA::Scan(lextable, idtable, in, parm, log);

#pragma region "print tables"
		std::cout << "---- lextable ----\n";
		for (int i = 0; i < lextable.size; ++i) {
			std::cout << lextable.table[i].lexema[0] << "\t" << lextable.table[i].sn << "\t";
			if (lextable.table[i].idxTI != TI_NULLIDX) {
				std::cout << lextable.table[i].idxTI;
			}
			std::cout << std::endl;
		}

		std::cout << "\n---- idtable ----\n";
		for (int i = 0; i < idtable.size; ++i) {
			std::cout << idtable.table[i].idxfirstLE << "\t";
			for (int j = 0; j < SCOPE_MAXSIZE && idtable.table[i].scope[j]; ++j) {
				std::cout << idtable.table[i].scope[j];
			}
			std::cout << "\t";
			for (int j = 0; j < ID_MAXSIZE && idtable.table[i].id[j]; ++j) {
				std::cout << idtable.table[i].id[j];
			}
			std::cout << "\t" << ((idtable.table[i].iddatatype == IT::IDDATATYPE::INT) ? "INT" : "STR") << "\t";

			switch (idtable.table[i].idtype)
			{
			case IT::IDTYPE::V:
				std::cout << "V"; break;
			case IT::IDTYPE::F:
				std::cout << "F"; break;
			case IT::IDTYPE::P:
				std::cout << "P"; break;
			case IT::IDTYPE::L:
				std::cout << "L"; break;
			}
			std::cout << "\t";
			if (idtable.table[i].iddatatype == IT::IDDATATYPE::INT) {
				std::cout << idtable.table[i].value.vint;
			}
			else if (idtable.table[i].value.vstr.len) {
				std::cout << (int)idtable.table[i].value.vstr.len << "\t" << idtable.table[i].value.vstr.str;
			}
			else {
				std::cout << (int)idtable.table[i].value.vstr.len;
			}

			std::cout << std::endl;
		}
#pragma endregion

		LT::Delete(lextable);
		IT::Delete(idtable);
	}
	catch (Error::ERROR e) {
		Log::WriteError(log, e);
	}

#ifdef _DEBUG
	int hasMemoryLeaks = _CrtDumpMemoryLeaks();
#else
	system("pause");
#endif // _DEBUG
	return 0;
}