## Yunzai GUI

## 环境

- Centos 8

> 8 以下请使用setup_16.x

```sh
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs -y
node -v
```

```sh
yum install git -y
git --version
```

- Window11

[点击安装 Node.js](https://nodejs.org)

> 推进全选 `下一步`

[点击安装 Git](https://nodejs.org)

## 使用

- 启动

> 可以在任意目录执行，GUI会把当前目录视为机器人根目录

> 若当前目前没有机器人，会进入安装项目步骤

```sh
# 并设定镜像地址
npx yunzai-gui@latest
# 设定镜像地址
npx --registry=https://registry.npmmirror.com yunzai-gui@latest
# 自定义端口
npx  yunzai-gui@latest start -p 9370
# 设定镜像并自定义
npx --registry=https://registry.npmmirror.com yunzai-gui@latest -p 9370
```

访问 `http://localhost:3000/`

账户 `12345678`

密码 `12345678`

- 修改

`yunzai-gui.json`

> 复制时注意删除注释语句

```json
{
  // 服务器配置
  "server": {
    // 可选，固定后续执行指令
    // 当无参运行时，会检查是否存在该配置
    "exec": "start -p 9370",
    // token 密钥
    "secret_key": "yunzai:secret:key"
  },
  // 管理员用户
  "admins": [
    {
      "username": "12345678",
      "password": "12345678"
    }
  ]
}
```

## 开发

```sh
git clone --depth=1 https://github.com/yunzai-org/yunzai-gui.git
cd yunzai-gui
```

> 尝试启动

```sh
npm install yarn@1.19.1 -g
yarn
yarn dev
```

> 编译

```sh
yarn build
npm link
```

> 测试

在任意目录中执行

```sh
yunzai-gui
```

- 访问接口

http://localhost:3000/api/env

http://localhost:3000/api/config
