import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 用于GitHub Pages部署的base配置
  // 如果您的仓库名为 username.github.io/repo-name，请设置为 '/repo-name/'
  // 如果是username.github.io，则保持为空字符串
  base: '',
})