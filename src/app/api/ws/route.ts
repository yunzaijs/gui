import { HTTPS_GIT_URL } from '@/server/idnex'
import { spawn } from 'child_process'

/**
 *
 * @param ws
 */
const gitClone = (ws: import('ws').WebSocket) => {
  const gitClone = spawn('git', [
    'clone',
    '--depth=1',
    HTTPS_GIT_URL,
    'yunzai-next'
  ])
  gitClone.stdout.on('data', data => {})
  gitClone.stderr.on('data', data => {})
  gitClone.on('close', code => {})
}

const WSEvent = {
  // 对方主动关闭
  '0': (ws: import('ws').WebSocket, d: any) => {
    // ws.close()
  },
  // 消息互传测试
  '1': (ws: import('ws').WebSocket, d: any) => {
    //
  },
  // 执行事件
  '2': (ws: import('ws').WebSocket, d: any) => {
    // gitClone
  },
  // 错误传输
  '9': (ws: import('ws').WebSocket, d: any) => {
    //
  },
  // 服务端主动关闭
  '12': (ws: import('ws').WebSocket, d: any) => {
    //
  }
}

const openEvent = (
  ws: import('ws').WebSocket,
  d: {
    typing: 'get-bot'
    message: string
    data: any
  }
) => {
  // ws
  if (d.typing == 'get-bot') {
    const data = {
      t: '2',
      d: {
        typing: 'post-bot',
        cwd: process.env.YUNZAI_GUI_CWD,
        status: '1',
        adress: '地区'
      }
    }
    ws.send(JSON.stringify(data))
    return
  }
}

export function SOCKET(
  client: import('ws').WebSocket,
  request: import('http').IncomingMessage,
  server: import('ws').WebSocketServer
) {
  client.on('message', message => {
    try {
      const data = JSON.parse(message.toString())
      if (data.t == '2') {
        // 执行消息
        openEvent(client, data.d)
      } else {
        //
      }
    } catch {
      client.send(
        JSON.stringify({
          t: '9',
          d: {
            message: '错误传输'
          }
        })
      )
    }
  })
  client.on('close', () => {
    console.log('websoket 关闭')
  })
}
