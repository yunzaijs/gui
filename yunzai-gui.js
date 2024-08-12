#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')
const next = require.resolve('next/dist/bin/next')

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
    `node ${next} ${argv.length == 0 ? `start ${projectDir}` : argv.join(' ').replace('start', `start ${projectDir}`)}`,
    {
      // 输出记录
      stdio: 'inherit'
    }
  )
}

// 记录地址
process.env.YUNZAI_GUI_DIR = projectDir
process.env.YUNZAI_GUI_CWD = cwd

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
  execSync(
    `node ${next} ${server.exec.replace('start', `start ${projectDir}`)}`,
    {
      // 输出记录
      stdio: 'inherit'
    }
  )
}

// 存在 配置  且 无参启动
if (fs.existsSync(dir) && argv.length == 0) {
  cmd()
} else {
  init()
}
