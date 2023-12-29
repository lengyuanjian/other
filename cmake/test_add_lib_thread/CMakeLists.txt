#生成lib 
#rm ./* -rf && cmake -DCMAKE_VERBOSE_MAKEFILE=ON ../ && make && ./app
cmake_minimum_required(VERSION 3.12)

project(test_add_lib)

set(CMAKE_CXX_COMPILER gcc)

set(CMAKE_CXX_STANDARD 14)

set(CMAKE_CXX_STANDARD_REQUIRED NO)

add_executable(app main.cpp)

add_subdirectory(thread_test)

target_link_libraries(app PRIVATE thread_test)

target_compile_definitions(app PRIVATE MODULE_NAME="app")
execute_process(
    COMMAND date "+%Y-%m-%d %H:%M:%S"
    OUTPUT_VARIABLE CMAKE_DATE
    OUTPUT_STRIP_TRAILING_WHITESPACE
)
add_definitions(-DCMAKE_DATE="${CMAKE_DATE}")

# get_target_property(link_libraries app INTERFACE_LINK_LIBRARIES)
# message("Linked Libraries: ${link_libraries}")
