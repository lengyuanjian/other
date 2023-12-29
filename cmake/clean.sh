#!/bin/bash

for dir in $(find ./ -name "build" -type d)
do
    echo "clean $dir/*"
    rm -rf $dir/*
done