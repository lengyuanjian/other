add_library(thread_test SHARED thread_time.cpp)

target_link_libraries(thread_test PRIVATE -lstdc++)

target_include_directories(thread_test PUBLIC "${CMAKE_CURRENT_SOURCE_DIR}")
