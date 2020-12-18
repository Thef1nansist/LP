#pragma once
#define POLISH_FUNCTION '@'
#define POLISH_END_STR '\0'

bool PolishNotation(int lex_position, LT::LexTable& Lextable, IT::IdTable& idtable);