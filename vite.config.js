import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 用于GitHub Pages部署的base配置
  // 已设置为仓库名称 'wildpack'
  base: '/wildpack/'
})