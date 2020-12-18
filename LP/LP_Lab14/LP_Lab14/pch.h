#pragma once

#ifdef _DEBUG
#define _CRTDBG_MAP_ALLOC
#include <crtdbg.h>
#define DBG_NEW new ( _NORMAL_BLOCK , __FILE__ , __LINE__ )
#else
#define DBG_NEW new
#endif

#include <ctime>
#include <fstream>
#include <iostream>

#include "Error.h"
#include "FST.h"
#include "In.h"
#include "Log.h"
#include "Parm.h"
#include "LT.h"
#include "IT.h"
#include "Lexer.h"
#include "PolishNotation.h"