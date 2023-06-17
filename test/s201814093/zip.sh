#!/bin/bash

studentNo=201814093

time=`date +"%H%M"`
fileName=s${studentNo}-${time}.tgz

tar cvzf ${fileName} --exclude="node_modules" --exclude="*.tgz" *
