import { useEffect, useState } from 'react'

export default () => {
  const onClickInstallBot = () => {
    //
  }

  const [messages, setMessages] = useState<string[]>([])

  const [status, setStatus] = useState('未连接')

  // const [ws, setWs] = useState<WebSocket | null>(null);

  const createWebSocet = (url: string) => {
    const wss = new WebSocket(url)
    // 连接成功时
    wss.onopen = () => {
      wss.send(
        JSON.stringify({
          s: '1',
          d: {
            message: '打开'
          }
        })
      )
      setStatus('已成功连接')

      // 发送补货
    }
    // 接收到消息
    wss.onmessage = (event: MessageEvent) => {
      const data = event.data
    }
    // 连接关闭时
    wss.onclose = () => {
      console.log('WebSocket 连接已关闭')
      setStatus('连接已关闭')
    }
    return wss
  }

  useEffect(() => {
    const url = `ws://${window.location.host}/api/ws`
    console.log('url', url)
    // 创建 WebSocket 连接
    const wss = createWebSocet(url)
    return () => {
      // 清理连接
      wss.close()
    }
  }, [])

  return (
    <>
      <div className="shadow-md w-full sm:w-1/2 p-6 rounded-md">
        <div className="my-1">
          柠檬冲水 - /Users/xiejihuang/Desktop/yunzai-org/next
        </div>
        <div className="my-1">GUI-WS-{status}</div>
        <div className="my-1">实例状态 - 运行中</div>
        <div className="my-1">地域和可用区: 北京</div>
        <button
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={onClickInstallBot}
          type="button"
        >
          安装
        </button>
      </div>
      <div>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </div>
    </>
  )
}
