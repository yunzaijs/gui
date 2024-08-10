#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs')

const command = process.argv[2] || 'start';

//
const projectDir = path.resolve(__dirname);

const cwd = process.cwd()

//
console.log("cwd", cwd)

const dir = path.join(cwd, 'yunzai.config.js')

if (fs.existsSync(dir)) {
    console.log("config", fs.readFileSync(dir, 'utf-8'))
}

console.log("projectDir", projectDir)

execSync(`cd ${projectDir} &&  npx next ${command}`, { stdio: 'inherit' });