# WILDPACK - Outdoor Backpack Showcase Website

## 项目概述

This project is an outdoor backpack showcase website built with Vue 3 + Vite, designed to highlight premium backpack products with an emphasis on adventure and quality. The website features product galleries, animated sections, and a responsive design suitable for all device access. Recently updated to focus specifically on backpack products with improved image management and internationalization.

## 环境要求

- Node.js: v14.18.0 或更高版本
- npm: v6.14.0 或更高版本
- 浏览器: Chrome 90+、Firefox 88+、Safari 14+、Edge 90+

## 启动步骤

### 1. 安装依赖

在项目根目录下执行以下命令安装所需依赖：

```bash
# Windows系统
try {
  npm install
} catch (error) {
  # 如果遇到PowerShell执行策略限制，请使用以下命令
  cmd /c npm install
}
```

### 2. 环境变量配置

本项目目前不需要特殊的环境变量配置，所有配置已内置在代码中。如需自定义，请在项目根目录创建`.env`文件并添加所需配置。

### 3. 本地开发启动

```bash
# Windows系统
cmd /c npm run dev
```

启动成功后，可通过以下地址访问开发服务器：
- 本地地址: http://localhost:5173/
- 网络地址: 可在启动日志中查看

### 4. 生产环境构建

```bash
# Windows系统
cmd /c npm run build
```

构建成功后，静态文件将生成在`dist`目录中，可用于部署到生产环境。

### 5. 预览生产环境构建

```bash
# Windows系统
cmd /c npm run preview
```

此命令将启动一个本地服务器，用于预览生产环境构建的效果。

## 项目架构说明

### 目录结构

```
├── dist/              # 生产环境构建输出目录
├── public/            # 静态资源目录
│   └── vite.svg       # Vite默认图标
├── src/               # 源代码目录
│   ├── App.vue        # 根组件
│   ├── main.js        # 应用入口文件
│   └── style.css      # 全局样式文件
├── index.html         # HTML模板文件
├── package.json       # 项目配置和依赖
├── package-lock.json  # 依赖版本锁定文件
├── README.md          # 项目说明文档
└── vite.config.js     # Vite配置文件
```

### 核心模块功能

1. **Hero Section**：突出展示背包产品主图，配合动态入场动画增强视觉冲击力
2. **Backpack Features**：展示背包核心特性，包括超轻构造、防水设计、模块化组织和人体工学悬挂系统
3. **Gallery Module**：展示背包产品图片集，支持交互悬停效果
4. **Navigation Module**：提供英文导航菜单，包含探索、特性、画廊和联系方式等入口
5. **Responsive Design**：适配各种屏幕尺寸，使用clamp()响应式字体和auto-fit自适应网格布局
6. **Centralized Image Management**：实现集中式图片配置，方便后续更新和维护

### 技术栈选型及理由

- **Vue 3**：采用组合式API，提供更好的TypeScript支持和性能优化，开发体验优秀
- **Vite**：现代前端构建工具，提供极快的开发服务器启动速度和优化的构建输出
- **CSS3**：使用Flexbox和Grid布局，实现响应式设计和现代UI效果

## 使用指南

### 网站功能说明

1. **浏览背包展示**：在首页滚动查看所有背包产品展示内容
2. **查看背包特性**：在Features部分了解背包的核心技术特点
3. **浏览产品画廊**：在Gallery部分查看更多背包产品图片
4. **导航浏览**：使用顶部导航栏在不同页面区域间切换
5. **响应式体验**：网站支持在手机、平板和桌面设备上的良好展示效果

## 常见问题解决方法

### 1. 依赖安装失败

**问题**：在Windows系统上执行`npm install`时出现PowerShell执行策略错误

**解决方案**：使用`cmd /c npm install`命令绕过PowerShell执行策略限制

### 2. 开发服务器无法启动

**问题**：执行`npm run dev`后服务器未成功启动

**解决方案**：
- 检查端口5173是否被占用
- 确认Node.js和npm版本符合要求
- 重新安装依赖后再尝试启动

### 3. 构建失败

**问题**：执行`npm run build`时出现错误

**解决方案**：
- 检查代码中是否有语法错误
- 确认所有依赖已正确安装
- 查看详细错误信息并针对性解决

### 4. 静态资源访问问题

**问题**：图片或其他静态资源无法正常显示

**解决方案**：
- 确保静态资源放在`public`目录下
- 使用正确的路径引用资源
- 对于`public`目录下的资源，使用绝对路径引用

## 贡献指南

欢迎提交Issues和Pull Requests来帮助改进这个项目！

## 许可证

本项目采用MIT许可证。