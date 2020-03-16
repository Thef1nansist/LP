#include <iostream>

void hello() {
    std::cout << "Hello" << std::endl;

}
void By() {
    std::cout << "By" << std::endl;

}

int main()
{
 
    bool b1 = true;
    bool b2 = false;

    char b3 = 'р';
    wchar_t b4 = 'р';
    auto b111 = 'р';

    //short - 16bit
    //Cамое маленькое число типа short -32 768 
    //Самое большое число типа short 32 767

    short ShortNumberp = 15;    //0000 0000 0000 1111 = 0x000f
    short ShortNumbern = -15;   //1111 1111 1111 0001 = 0xfff1

    short b7 = 0x7fff; //0111 1111 1111 1111 = 0x7fff
    short b8 = 0x8000; //1000 0000 0000 0000 = 0x8000

    //unsigned short - 16bit
    //Cамое маленькое число типа short 0
    //Самое большое число типа short 65 535

    unsigned short maxShortUnNumber = 0xffff; //1111 1111 1111 1111 = 0xffff
    unsigned short minShortUnNumber = 0x0000; //0000 0000 0000 0000 = 0x0000


    //int - 32bit
    // Самое маленькое число типа int -2 147 483 648 =  1000 0000 0000 0000 0000 0000 0000 0000‬
    // Самое большое число типа int 2 147 483 647 = 0111 1111 1111 1111 1111 1111 1111 1111

    int IntNumberp = 0x00000010 ; //0000 0000 0000 0000 0000 0000 0001 0000 = 0x00000010
    int IntNumbern = 0xfffffff0; //1111 1111 1111 1111 1111 1111 1111 0000 = 0xfffffff0



    int minIntNuber = 0x80000000;//1000 0000 0000 0000 0000 0000 0000 0000‬ = 0x80000000
    int maxIntNumber = 0x7fffffff; //0111 1111 1111 1111 1111 1111 1111 1111 = 0x7fffffff
    


    //unsigned int -32bit
    //minUIntNumber = 0
    //maxUINumber = 4 294 967 295

    unsigned int minUIntNumber = 0x00000000; //0000 0000 0000 0000 0000 0000 0000 0000 = 0x00000000;
    unsigned int maxUIntNumber = 0xffffffff; //1111 1111 1111 1111 1111 1111 1111 1111 = 0xffffffff;
   
    
    
    //long - 32bit
    // Самого маленькое число типа long  -2 147 483 648 
	// Самое большое число типа long 2 147 483 647 

    long LongNumberp = 17; //0000 0000 0000 0000 0000 0000 0001 0001 = 0x00000011;
    long LongNumbern = -17; //0000 0000 0000 0000 0000 0000 0001 0001 = 1111 1111 1111 1111 1111 1111 1110 1111 = 0xffffffef

    long maxLongNumber = 0x7fffffff; // 0111 1111 1111 1111 1111 1111 1111 1111 = 0x7fffffff;
    long minLongNumber = 0x80000000; //0111 1111 1111 1111 1111 1111 1111 1111 = 1000 0000 0000 0000 0000 0000 0000 0000‬ = 0x80000000;
     

    //unsigned long - 32bit
    //Самого маленькое число типа unsigned long 0
    //Самое большое число типа unsigned unsigned long 4 294 967 295

    unsigned long maxULongNumber = 0x00000000;//0000 0000 0000 0000 0000 0000 0000 0000 = 0x00000000;
    unsigned long minULongNumber = 0xffffffff;// ‭1111 1111 1111 1111 1111 1111 1111 1111 = ‬0xffffffff;


    //float - 32bit

    float FloatNumberp = 7 ;//0.1000 0001.1100000000000 = 0x40e00000
    float FloatNumbern = - 7.0;//0000 0111 = 1111 1000 = 1111 1001 = 0xf9 = 0xc0e00000

    //17
    float Number1 = 20.225f;
    float Number2 = -20.225f;
    float value1 = Number1 / 0;
    float value2 = Number2 / 0;
    float value3 = sqrt(-7.0f);


    //18
    char ch = 'A';
    wchar_t wc = L'Т';
    short sh = 4;
    int i = 5;
    float fl = 1.5f;
    double doub = 8.5;

    char* pc = &ch;
    wchar_t* pwc = &wc;
    short* ps = &sh;
    float* pf = &fl;
    double* pd = &doub;

    //19
    void (*message)();

    message =hello;
    message();

    message = By;
    message();



    //20
    char& chlin = ch;
    wchar_t& wclin = wc;
       
    short& shlin = sh;
    int& ilin = i;
    float& fllin = fl;
    double& doublin = doub;
   
}

