cmake_minimum_required(VERSION 3.12)

project(TEST_APP)

set(CMAKE_CXX_STANDARD 20)

set(CMAKE_CXX_STANDARD_REQUIRED NO)

set(MYPROJECT_VERSION_MAJOR 1)
set(MYPROJECT_VERSION_MINOR 3)

configure_file(ver.h.in ver.h)

add_executable(app  main.cpp)

target_include_directories(app PRIVATE "${CMAKE_CURRENT_BINARY_DIR}")

execute_process(
    COMMAND git describe --abbrev=7 --dirty --always --tags
    WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
    OUTPUT_VARIABLE GIT_VERSION
    OUTPUT_STRIP_TRAILING_WHITESPACE
)

# 将 Git 版本信息传递给编译器
add_definitions(-DGIT_VERSION="${GIT_VERSION}")

# 获取当前日期和时间
execute_process(
    COMMAND date "+%Y-%m-%d %H:%M:%S"
    OUTPUT_VARIABLE BUILD_DATE
    OUTPUT_STRIP_TRAILING_WHITESPACE
)

# 将日期传递给编译器，并指定宏名称
add_definitions(-DBUILD_DATE="${BUILD_DATE}")