#include "Error.h"
#include "Parm.h"
#include "Log.h"
#include "In.h"
#include "FST.h"
#include <iostream>
#include <tchar.h>
#include <cwchar>

using std::endl;

int _tmain(int argc, _TCHAR* argv[])
{
    setlocale(LC_ALL, "ru");
    std::ifstream suka("in.txt");
    std::ifstream blyat("out.txt");
    int padla = 0;
    int mraz = 0;
    while (!suka.eof()) {
        suka.get();
        padla++;
    }
    while (!blyat.eof()) {
        blyat.get();
        mraz++;
    }
    std::cout << "in " << padla<<" out "<<mraz << endl;

    Log::LOG log = Log::INITLOG;
    try
    {
        Parm::PARM parm = Parm::getparm(argc, argv);
        log = Log::getlog(parm.log);
        Log::WriteLine(log, (char*)"Тест:", (char*)"без ошибок", (char*)"");
        Log::WriteLog(log);
        Log::WriteParm(log, parm);
        In::IN in = In::getin(parm.in,parm.out);
        Log::WriteIn(log, in);
        Log::Close(log);

    }
    catch (Error::ERROR e)
    {
        Log::WriteError(log, e);
    };
    return 0;
}