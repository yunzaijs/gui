import { openEvent } from '@/server/events'
//
const TypingEnum = ['0', '1', '2', '9'] as const
//
type Typing = (typeof TypingEnum)[number]
//
const WSEvent: {
  [key in Typing]: (ws: import('ws').WebSocket, d: any) => void
} = {
  // 客户端主动关闭
  '0': (ws: import('ws').WebSocket, d: any) => {
    console.log('客户端主动关闭')
  },
  // 连接性测试
  '1': (ws: import('ws').WebSocket, d: any) => {
    console.log('收到连接')
  },
  // 客户端事件执行请求
  '2': openEvent,
  // 客户端错误 或 服务器错误
  '9': (ws: import('ws').WebSocket, d: any) => {
    console.error('错误传输', d)
  }
}

/**
 *
 * @param ws
 * @param message
 */
const sendError = (ws: import('ws').WebSocket, message: string) => {
  ws.send(
    JSON.stringify({
      t: '9',
      d: {
        message
      }
    })
  )
}

/**
 *
 * @param ws
 * @param request
 * @param server
 */
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
        t: Typing
        d: any
      }
      //
      if (WSEvent[data.t] && typeof WSEvent[data.t] == 'function') {
        WSEvent[data.t](ws, data.d)
      } else {
        sendError(ws, '客户端约定格式错误')
      }
    } catch (err) {
      console.error(err)
      sendError(ws, '服务器数据解析错误')
    }
  })
  //
  ws.on('close', err => {
    console.log('服务器连接关闭')
  })
  //
  ws.on('error', err => {
    console.error('服务器连接错误', err)
  })
}
