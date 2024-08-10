## Yunzai GUI

随时随地可用的Yunzai可视化管理

此仓库正在设计中....

## 使用

- 启动

> 可以在任意目录执行，他会把当前目录是为机器人根目录

> 若当前目前没有机器人，会进行安装步骤

```sh
npx yunzai-gui@latest
```

访问 `http://localhost:3000/`

## 测试

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

> 测试

在任意目录中执行

```sh
yunzai-gui
```

- 访问接口

http://localhost:3000/api/env

http://localhost:3000/api/config
