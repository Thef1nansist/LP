#include <iostream>
#include"Log.h"
#pragma once

namespace FST {
	struct RELATION
	{
		char symbol;// символ перехода
		short nnode; // номер смежной строки
		RELATION(
			char c = 0x00, // символ перехода
			short ns = NULL // новое состояние
		);
	};

	struct NODE // вершина графа перехода
	{
		short n_relation; // кол-во рёбер
		RELATION* relations; // сами рёбра
		NODE(); // два конструктора 
		NODE(
			short n, // кол-во рёбер
			RELATION rel, ... // список рёбер
		);
	};

	struct FST // недетермированный(несколько вариантов перехода) конечный автомат
	{
		const char* string; // цепочка
		short position; //позиция в цепочке
		short nstates; // кол-во состояний
		NODE* nodes; // граф перехода
		short* rstates; // возможные состояния
		FST(
			const char* s, // цепочка(строка завершающая 0х00
			short ns, // кол-во состояний автомата
			NODE n, ... // список состояний(граф перехода)
		);

	};

	bool execute( // функция распозновния цепочки
		FST& fst // недетермированный конечный автомат
	);
	void read(const char* string, std::ofstream* outputFile);
	bool step(FST& fst, short*& rstates); // разбор одного символа
}
