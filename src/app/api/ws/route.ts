import { openEvent } from '@/server/events'

const WSEvent = {
  // 对方主动关闭
  '0': (ws: import('ws').WebSocket, d: any) => {
    // ws.close()
  },
  // 消息互传测试
  '1': (ws: import('ws').WebSocket, d: any) => {
    console.log('收到连接')
  },
  // 执行事件
  '2': openEvent,
  // 错误传输
  '9': (ws: import('ws').WebSocket, d: any) => {
    //
  },
  // 服务端主动关闭
  '12': (ws: import('ws').WebSocket, d: any) => {
    //
  }
}

export function SOCKET(
  ws: import('ws').WebSocket,
  request: import('http').IncomingMessage,
  server: import('ws').WebSocketServer
) {
  console.log('websoket 开启')
  //
  ws.on('message', message => {
    try {
      //
      const data = JSON.parse(message.toString()) as {
        t: '0' | '1' | '2' | '9' | '12'
        d: any
      }
      // //
      if (WSEvent[data.t] && typeof WSEvent[data.t] == 'function') {
        WSEvent[data.t](ws, data.d)
      } else {
        ws.send(
          JSON.stringify({
            t: '9',
            d: {
              message: '错误传输'
            }
          })
        )
      }
    } catch (err) {
      console.error(err)
      ws.send(
        JSON.stringify({
          t: '9',
          d: {
            message: '错误传输'
          }
        })
      )
    }
  })

  ws.on('close', err => {
    console.log('websoket 关闭')
  })

  ws.on('error', err => {
    console.error('出错啦', err)
  })

  //
}
