#!/bin/bash

root=`cd \`dirname $0\`;pwd`

base=$root/$1

RUNS=$base/runs
HIST=$base/history

#for local testing. it is set by github action
#GITHUB_REF=${GITHUB_REF:=`git symbolic-ref  HEAD`}

#starts with "refs/heads/{branchname}"
branch=${2:-`echo $GITHUB_REF | perl -pe 's@.*/@@'`}

rm -rf $base
mkdir -p $base

ts=`date +%Y%m%d/%H%M%S`
folder=$RUNS/$ts
mkdir -p $folder
cp build/out/* $folder
cp -r html/ $folder
ls -p $folder > $folder/index.txt
cd $RUNS
ln -nsf $ts latest
ls -p > index.txt
find . > all.txt

mkdir -p $HIST
$root/create-history.sh $RUNS > $HIST/history.json
(echo -n 'testHistory=' ; cat $HIST/history.json) > $HIST/script-history.js

echo == summary of last run:
jq '.[keys|last] | values[] | {name,tests,errors,failures,time, timestamp}' $HIST/history.json
