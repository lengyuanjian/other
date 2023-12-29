#include <iostream>

#ifndef BUILD_DATE
#define BUILD_DATE "0000-00-00 00:00:00"
#endif

#ifndef CMAKE_DATE
#define CMAKE_DATE "0000-00-00 00:00:00"
#endif

#ifndef MODULE_NAME
#define MODULE_NAME "****"
#endif

int main(int argc, char * argv[])
{
    
    std::cout<<"module:" << MODULE_NAME << "\n";
    std::cout<<"cmake:" << CMAKE_DATE << "\n";
    std::cout<<"build:" << BUILD_DATE << "\n";

    for(int i = 0; i < argc; ++i)
    {
        std::cout<<"arg["<<i<<"]["<<argv[i]<<"]\n";
    }
    return 0;
}