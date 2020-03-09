#!/usr/bin/env node

const path = require("path");
const shelljs = require("shelljs");

const distDir = path.resolve(__dirname, "..", "dist", "*");
shelljs.rm("-rf", distDir);

const webBundleFile = path.resolve(__dirname, "..", "web/bundle.iife.js");
shelljs.rm("-f", webBundleFile);

const webTestFile = path.resolve(__dirname, "..", "web/test.iife.js");
shelljs.rm("-f", webTestFile);

const tgzFile = path.resolve(__dirname, "..", "*.tgz");
shelljs.rm("-f", tgzFile);
