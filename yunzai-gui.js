#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const argv = [...process.argv.splice(2)]

// 得到当前位置
const projectDir = path.resolve(__dirname)

// 当前执行的目录
const cwd = process.cwd()

const dir = path.join(cwd, 'yunzai-gui.json')

console.log('Yunzai GUI Project', projectDir)
console.log('Yunzai GUI CWD', cwd)

/**
 *
 */
const init = () => {
  execSync(
    `cd ${projectDir} && npx next ${argv.length == 0 ? 'start' : argv.join(' ')}`,
    {
      // 输出记录
      stdio: 'inherit',
      // 修改 cwd 位置
      cwd: cwd
    }
  )
}

/**
 *
 * @returns
 */
const cmd = () => {
  const JOSNData = JSON.parse(fs.readFileSync(dir, 'utf-8'))
  const server = JOSNData.server
  if (!server || !server?.exec || typeof server.exec != 'string') {
    init()
    return
  }
  execSync(`cd ${projectDir} && npx next ${server.exec}`, {
    // 输出记录
    stdio: 'inherit',
    // 修改 cwd 位置
    cwd: cwd
  })
}

// 存在 配置  且 无参启动
if (fs.existsSync(dir) && argv.length == 0) {
  cmd()
} else {
  init()
}
