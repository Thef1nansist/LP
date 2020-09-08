#pragma once
#define IN_MAX_LEN_TEXT 1024*1024
#define IN_CODE_ENDL '\n'
#define IN_CODE_SL '|'
#define IN_CODE_CPACE ' '

#define IN_CODE_TABLE {\
	IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::T,    IN::T, IN::S,	 IN::T, IN::F,    IN::F, IN::F,    IN::F, IN::F, \
	IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::T, IN::T, \
\
	IN::S, IN::T,    IN::F, IN::F,    IN::F, IN::F,    IN::T, IN::A,    IN::A, IN::A,    IN::A, IN::A,    IN::A, IN::A,    IN::F, IN::T, \
	IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::A,    IN::T, IN::A,    IN::F, IN::F, \
\
	IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T, \
	IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F, \
\
	IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T, \
	IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::T,    IN::T, IN::A,    IN::T, IN::A,    IN::F, IN::F, \
\
\
	IN::T, IN::T,    IN::T, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F, \
	IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::T,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F, \
\
	IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F, \
	IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F, \
\
	IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::T,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F, \
	IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::T, \
\
	IN::F, IN::T,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::T, IN::F,    IN::F, IN::F,    IN::T, IN::F,    IN::F, IN::F, \
	IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::T,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F,    IN::F, IN::F  \
					}

namespace In
{// ���� ��������� 
	struct IN {
		enum { T = 1024, F = 2048, I = 4096, A = 8192, S = 16284, Q = 32568 };
		int size;
		int lines;
		int ignor;
		unsigned char* text;
		int code[256];
	};
	IN getin(wchar_t infile[], wchar_t outfile[]);
};
