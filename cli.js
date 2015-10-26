#!/usr/bin/env node

var InjectGa = require('./index')
  , args     = require('yargs').argv
  , fs       = require('fs')

var fileName = args._[0];

if(!fileName){
  throw Error('Please specify a target HTML file');
}

if(!args.c){
  throw Error('Please specify your tracking code');
}

var file = fs.readFileSync(fileName)
  , code = args.c
  , toHead = args.h
  , injectGa = new InjectGa(file)

var html = injectGa.insert(code, toHead)
  , outputName = args.o || args.output

if(outputName){
  fs.writeFileSync(outputName, html);
} else {
  console.log(html);
}
