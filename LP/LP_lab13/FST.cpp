#include"FST.h"
#include "Log.h"
#include<iomanip>
#include <iostream>
#include<fstream>
#include <sstream>

FST::RELATION::RELATION(char c, short nn) {
	symbol = c;
	nnode = nn;
};

FST::NODE::NODE() { // по умолчанию
	n_relation = 0;
	RELATION* relations = NULL;
}

FST::NODE::NODE(short n, RELATION rel, ...) { // с параметрами 
	n_relation = n;
	RELATION* p = &rel;
	relations = new RELATION[n];
	for (short i = 0; i < n; i++)
		relations[i] = p[i];
};

FST::FST::FST(const char* s, short ns, NODE n, ...) {
	string = s;
	nstates = ns;
	nodes = new NODE[ns];
	NODE* p = &n;
	for (int i = 0; i < ns; i++)
		nodes[i] = p[i];
	rstates = new short[nstates];
	memset(rstates, 0xff, sizeof(short) * nstates);
	rstates[0] = 0;
	position = -1;
}

bool FST::step(FST& fst, short*& rstates) // один шаг автомата
{
	bool rc = false;
	std::swap(rstates, fst.rstates);

	for (short i = 0; i < fst.nstates; i++)
	{
			if (rstates[i] == fst.position)
				for (short j = 0; j < fst.nodes[i].n_relation; j++)
					if (fst.nodes[i].relations[j].symbol == fst.string[fst.position])
					{
						fst.rstates[fst.nodes[i].relations[j].nnode] = fst.position + 1;
						rc = true;
					}
	}

	return rc;
}
bool FST::execute(FST& fst) { // распознование цепочки
	short* rstates = new short[fst.nstates];
	memset(rstates, 0xff, sizeof(short)*fst.nstates);
	short stringL = strlen(fst.string);
	bool rc = true;

	for (short i = 0; (i < stringL) && rc; i++) {
		fst.position++;
		rc = step(fst, rstates);
	}
	delete[] rstates;
	return (rc ? (fst.rstates[fst.nstates - 1] == stringL) : rc);
}


void FST::read(const char* string, std::ofstream* outputFile) {

		FST fst(
			string,
			8,
			NODE(1, RELATION('a', 1)),
			NODE(1, RELATION('e', 2)),
			NODE(2, RELATION('b', 2), RELATION('g', 3)),
			NODE(2, RELATION('c', 4), RELATION('d', 4)),
			NODE(1, RELATION('e', 5)),
			NODE(4, RELATION('b', 5), RELATION('c', 4), RELATION('d', 4), RELATION('f', 6)),
			NODE(1, RELATION('e', 7)),
			NODE()
		);
		*outputFile << fst.string << std::endl;
	}