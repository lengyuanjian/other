#include <iostream>
#include "add.h"
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
    
    std::cout << "module: " << MODULE_NAME << std::endl;
    std::cout << "cmake : " << CMAKE_DATE  << std::endl;
    std::cout << "build : " << BUILD_DATE  << std::endl;

    for(int i = 0; i < argc; ++i)
    {
        std::cout << "arg[" << i << "] [" << argv[i] << "]" << std::endl;;
    }

    std::cout << "add(1, 3) = " << add_fun(1,3) << std::endl;
    
    return 0;
}