#include "thread_time.h"
#include <pthread.h>
#include <iostream>
#include <unistd.h>

void* fun(void * p_arg)
{
    auto thread_id = 0;
    for(int i = 0; i < 3; ++i)
    {
        std::cout<< thread_id << ":" << i <<std::endl;
        sleep(1);
    }
    return p_arg;
}

int time_fun(int t)
{
    pthread_t thread_id;
    auto ret = pthread_create(&thread_id, 0, fun, 0);
    pthread_join( thread_id, 0);
    return t;
}
