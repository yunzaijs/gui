#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs')

const command = process.argv[2] || 'start';

// 得到当前位置
const projectDir = path.resolve(__dirname);
// 当前执行的目录
const cwd = process.cwd()

console.log("Yunzai GUI Project", projectDir)
console.log("Yunzai GUI CWD", cwd)

execSync(`cd ${projectDir} &&  npx next ${command}`, {
    stdio: 'inherit',
    // 修改 cwd 位置
    cwd: cwd
});