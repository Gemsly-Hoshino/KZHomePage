<div align="center">
  <h1>KZHomePage</h1>
  <p>
    <strong>纯净 · 极简 · 向下兼容的个人主页</strong>
  </p>
  <p>
    <a href="https://github.com/Gemsly-Hoshino/KZHomePage/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
    <a href="https://github.com/Gemsly-Hoshino/KZHomePage"><img src="https://img.shields.io/badge/version-1.2.0-brightgreen" alt="Version"></a>
  </p>
</div>

---

## 📖 简介 / Introduction

**KZHomePage** 是一款轻量级、纯静态的个人主页模板。专注于提供极致干净的浏览体验，同时兼顾老旧浏览器与移动端的向下兼容。

本仓库是 [Gemsly Hoshino](https://github.com/Gemsly-Hoshino) 在 [kaygb 原版 KZHomePage](https://github.com/kaygb/KZHomePage) 基础上修改的个人分支，移除了音乐播放器等重资产依赖，回归纯粹的静态展示。

KZHomePage is a lightweight, pure static personal homepage template. It focuses on delivering a clean browsing experience while maintaining backward compatibility with older browsers and mobile devices.

This repository is a personal fork by [Gemsly Hoshino](https://github.com/Gemsly-Hoshino) based on [kaygb's original KZHomePage](https://github.com/kaygb/KZHomePage), removing heavy dependencies like music players and returning to a pure static display.

> 🌐 **在线演示 / Live Demo**: [https://blog.gemslyho.org](https://blog.gemslyho.org)

---

## ✨ 特性 / Features

- 🪶 **极致轻量** — 纯静态 HTML + CSS + JS，无后端依赖
- 📱 **响应式设计** — 完美适配桌面端、平板与手机
- 🔄 **向下兼容** — 支持老旧浏览器访问，优雅降级
- 🎨 **自定义背景** — 支持图片背景（avif 格式），后续可通过 CSS 自由切换
- 💬 **一言集成** — 集成 [Hitokoto API](https://hitokoto.cn)，每次刷新展示不同句子
- 🔗 **社交链接** — GitHub、Email 等快捷入口
- 🚀 **快速部署** — 支持任意静态托管平台（GitHub Pages、Vercel、Netlify 等）

---

## 🛠️ 技术栈 / Tech Stack

| 技术 | 说明 |
|------|------|
| HTML5 | 语义化标记结构 |
| CSS3 | 自定义样式 + 响应式布局 |
| [Bootstrap 4.4.1](https://getbootstrap.com/) | 前端布局框架 |
| [Font Awesome 5](https://fontawesome.com/) | 图标库 |
| [jQuery 3.2.1](https://jquery.com/) | DOM 操作 |
| [Hitokoto API](https://hitokoto.cn) | 一言句子接口 |

---

## 🚀 快速开始 / Quick Start

### 方式一：直接部署 / Deploy Directly

1. **克隆仓库 / Clone the repo**
   ```bash
   git clone https://github.com/Gemsly-Hoshino/KZHomePage.git
   cd KZHomePage
   ```

2. **打开 `index.html`** — 直接在浏览器中打开即可预览
3. **部署到静态托管平台** — 将整个项目上传至 GitHub Pages、Vercel、Netlify 等

### 方式二：Fork 修改 / Fork & Customize

1. 点击右上角 **Fork** 按钮
2. 修改 `index.html` 中的个人信息、链接与样式
3. 替换 `static/images/` 下的背景图片
4. 部署到你的静态托管平台

---

## 🎨 自定义指南 / Customization

### 修改个人信息

编辑 `index.html`：

- **标题**：修改 `<title>` 标签
- **姓名**：修改 `<h1>` 内容
- **简介**：修改 `<p>` 描述文字
- **按钮链接**：修改按钮的 `data-href` 属性
- **社交链接**：修改 `<ul class="social">` 中的 `href`

### 更换背景图片

在 `index.html` 的 `<style>` 中修改：

```css
body {
    background-image: url("./static/images/你的图片.avif");
}

.photo-bg {
    background-image: url("./static/images/你的头像.avif");
}
```

> 💡 建议使用 **avif** 格式以获得更小的体积与更好的画质，同时也支持使用 webp、jpg 等传统格式。

### 一言 API

默认使用 `https://v1.hitokoto.cn`，如需替换可在 `index.html` 顶部修改 `hitokoto_api` 变量。

---

## 📁 项目结构 / Project Structure

```
KZHomePage/
├── index.html              # 主页面
├── favicon.ico             # 网站图标
├── LICENSE                 # MIT 许可证
├── README.md               # 本文件
├── static/
│   ├── style.css           # 样式文件
│   ├── main.js             # JavaScript 交互逻辑
│   └── images/
│       ├── bg.avif         # 页面背景图片
│       └── fbg.avif        # 卡片头像图片
```

---

## 📜 许可证 / License

本项目基于 **MIT 许可证** 开源 — 详见 [LICENSE](./LICENSE) 文件。

```
MIT License

Copyright (c) 2022 kaygb
Copyright (c) 2026 Gemsly Hoshino
```

---

## 🙏 致谢 / Credits

- 原始作者 [kaygb](https://github.com/kaygb) — [KZHomePage](https://github.com/kaygb/KZHomePage)
- [Hitokoto API](https://hitokoto.cn) — 一言句子服务
- [Bootstrap](https://getbootstrap.com/) — 前端框架
- [Font Awesome](https://fontawesome.com/) — 图标库

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Gemsly-Hoshino">Gemsly Hoshino</a></p>
</div>