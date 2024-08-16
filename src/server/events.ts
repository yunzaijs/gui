import { HTTPS_GIT_URL } from '@/server/idnex'
import { exec, spawn } from 'child_process'

let lock = false

/**
 *
 * @param ws
 */
const gitClone = (ws: import('ws').WebSocket) => {
  lock = true

  const command = 'git'
  const args = ['clone', '--depth=1', HTTPS_GIT_URL, '.']
  // 打印执行的命令
  console.log(`Executing command: ${command} ${args.join(' ')}`)
  const gitCloneProcess = spawn(command, args)
  gitCloneProcess.stdout.on('data', data => {
    // 将输出发送到 WebSocket
    console.log(`Output: ${data.toString()}`)
  })
  gitCloneProcess.stderr.on('data', data => {
    // 将错误信息发送到 WebSocket
    console.log(`Error: ${data.toString()}`)
  })
  gitCloneProcess.on('close', code => {
    // 解锁
    lock = false

    //

    if (code === 0) {
      const data = {
        t: '2',
        d: {
          typing: 'install-bot-callback',
          status: '2'
        }
      }

      ws.send(JSON.stringify(data))

      console.log('Git clone completed successfully.')
    } else {
      const data = {
        t: '2',
        d: {
          typing: 'install-bot-callback',
          status: '0'
        }
      }

      ws.send(JSON.stringify(data))

      console.log(`Git clone failed with code: ${code} `)
    }
  })
}

// 获取本地地区信息
const getLocalRegion = () => {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return {
    locale,
    timeZone
  }
}

// 检查指定路径是否是 Git 仓库
const checkGitRepository = (repoPath: string) => {
  return new Promise((resolve, reject) => {
    exec(
      'git rev-parse --is-inside-work-tree',
      { cwd: repoPath },
      (error, stdout, stderr) => {
        if (error) {
          if (stderr.includes('not a git repository')) {
            resolve(false) // 不是 Git 仓库
          } else {
            reject(`Error: ${stderr} `)
          }
        } else {
          resolve(true) // 是 Git 仓库
        }
      }
    )
  })
}

// 获取指定路径的 Git 仓库远程地址
const getGitRemoteUrl = (repoPath: string) => {
  return new Promise((resolve, reject) => {
    exec(
      'git config --get remote.origin.url',
      { cwd: repoPath },
      (error, stdout, stderr) => {
        if (error) {
          reject(`Error: ${stderr} `)
        } else {
          resolve(stdout.trim()) // 去掉多余的空白字符
        }
      }
    )
  })
}

export const openEvent = (
  ws: import('ws').WebSocket,
  d: {
    typing: 'get-bot'
    message: string
    data: any
  }
) => {
  console.log('d', d)

  // 得到bot信息
  if (d.typing == 'get-bot') {
    //
    const localInfo = getLocalRegion()
    //
    const cwd = process.env?.YUNZAI_GUI_CWD ?? process.cwd()

    //
    const data = {
      t: '2',
      d: {
        typing: 'post-bot',
        cwd: cwd,
        name: 'Next',
        // 未安装  ，可判断 本地是否有 yunzai包即可识别
        status: '1',
        locale: localInfo.locale,
        git_url: '',
        lock: lock ? '1' : '0'
      }
    }

    //
    checkGitRepository(cwd)
      .then(async res => {
        //
        data.d.git_url =
          ((await getGitRemoteUrl(cwd).catch(err => {
            console.error(err)
            return ''
          })) as string) ?? ''
        //
        if (res) {
          data.d.status = '1'
          ws.send(JSON.stringify(data))
        } else {
          data.d.status = '0'
          ws.send(JSON.stringify(data))
        }
        //
      })
      .catch(err => {
        console.error(err)
        data.d.status = '0'
        ws.send(JSON.stringify(data))
      })
    // 安装bot
  } else if (d.typing == 'install-bot') {
    //
    gitClone(ws)
  }
}
