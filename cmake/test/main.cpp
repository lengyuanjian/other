#include <iostream>
#include "ver.h"
int main(int argc, char * argv[])
{
    std::cout << "MyProject Version: " << MYPROJECT_VERSION_MAJOR << "." << MYPROJECT_VERSION_MINOR << std::endl;
    std::cout<< GIT_VERSION << "\n";
    std::cout<< BUILD_DATE << "\n";
    for(int i = 0; i < argc; ++i)
    {
        std::cout<<"["<<argv[i]<<"]\n";
    }
    return 0;
}