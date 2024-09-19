import { useEffect, useState } from 'react'

export default () => {
  /**
   *
   */
  const onClickInstallBot = () => {
    if (msg.lock == '1') {
      alert('正在安装')
      return
    }

    if (!ws) {
      alert('未连接')
    } else {
      ws.send(
        JSON.stringify({
          t: '2',
          d: {
            typing: 'install-bot'
          }
        })
      )
    }
  }

  const [messages, setMessages] = useState<string[]>([])

  const [msg, setMsg] = useState({
    name: 'next',
    cwd: 'localhost',
    locale: '北京',
    status: '未安装',
    git_url: '未装载',
    lock: '0'
  })

  const [status, setStatus] = useState('未连接')

  const [ws, setWs] = useState<WebSocket | null>(null)

  const createWebSocet = (url: string) => {
    const wss = new WebSocket(url)
    // 连接成功时
    wss.onopen = () => {
      //
      wss.send(
        JSON.stringify({
          t: '1',
          d: {
            message: '打开'
          }
        })
      )

      //
      setStatus('已成功连接')

      //
      wss.send(
        JSON.stringify({
          t: '2',
          d: {
            typing: 'get-bot'
          }
        })
      )
    }
    // 接收到消息
    wss.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data)
      console.log('data', data)
      if (data.t == '2' && data.d.typing == 'post-bot') {
        // console.log("data", data)
        setMsg({
          name: data.d.name,
          cwd: data.d.cwd,
          locale: data.d.locale,
          git_url: data.d.git_url,
          status: data.d.status == '1' ? '已安装' : '未安装',
          lock: data.d.lock
        })
      } else if (data.t == '2' && data.d.typing == 'install-bot-callback') {
        if (data.d.status == '2') {
          setMsg({ ...msg, lock: '2' })
        } else {
          setMsg({ ...msg, lock: '0' })
        }
      }
    }
    // 连接关闭时
    wss.onclose = () => {
      console.log('WebSocket 连接已关闭')
      setStatus('连接已关闭')
    }
    //
    wss.onerror = err => {
      console.error('出错啦', err)
    }
    return wss
  }

  useEffect(() => {
    const url = `ws://${window.location.host}/api/ws`
    console.log('url', url)
    // 创建 WebSocket 连接
    const wss = createWebSocet(url)
    // 保存
    setWs(wss)
    return () => {
      // 清理连接
      wss.close()
    }
  }, [])

  return (
    <section className="flex flex-col h-full gap-2 p-2">
      {
        //
      }
      <div className="shadow-centent flex gap-4 w-full p-4 rounded-md">
        <div className="my-1">
          {msg.name} - {msg.cwd}
        </div>
        <div className="my-1">GUI-WS-{status}</div>
        <div className="my-1">仓库: {msg.git_url}</div>
        <div className="my-1">
          实例状态 - {msg.lock == '1' ? '正在安装...' : msg.status}
        </div>
        <div className="my-1">地区: {msg.locale}</div>
        {msg.status == '未安装' && msg.lock == '0' && (
          <button
            className=" px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            onClick={onClickInstallBot}
            type="button"
          >
            安装
          </button>
        )}
      </div>
      {
        //
      }
      <div>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </div>
      {
        //
      }
      <div className="shadow-centent w-full h-full max-h-96 bg-black text-white p-4 rounded-md">
        localhost:~$ XXX
      </div>
    </section>
  )
}
