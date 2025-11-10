const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting manual deployment process...');

// 检查dist目录
if (!fs.existsSync('./dist')) {
  console.error('Error: dist directory not found!');
  process.exit(1);
}

console.log('Dist directory exists, proceeding with deployment...');

try {
  // 临时目录用于gh-pages部署
  const tempDir = path.join(process.cwd(), 'temp-gh-pages');
  
  // 清理旧的临时目录
  if (fs.existsSync(tempDir)) {
    console.log('Cleaning old temp directory...');
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  
  // 创建临时目录
  console.log('Creating temp directory...');
  fs.mkdirSync(tempDir, { recursive: true });
  
  // 复制dist内容到临时目录
  console.log('Copying dist files to temp directory...');
  const copyRecursive = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };
  
  copyRecursive('./dist', tempDir);
  
  // 初始化git仓库
  console.log('Initializing git in temp directory...');
  process.chdir(tempDir);
  
  execSync('git init', { stdio: 'inherit' });
  execSync('git config user.name "Deployment Bot"', { stdio: 'inherit' });
  execSync('git config user.email "deployment@example.com"', { stdio: 'inherit' });
  
  // 添加所有文件
  console.log('Adding files...');
  execSync('git add .', { stdio: 'inherit' });
  
  // 提交
  console.log('Committing files...');
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  
  // 添加远程仓库
  console.log('Adding remote repository...');
  execSync('git remote add origin https://github.com/xiepeijia/wildpack.git', { stdio: 'inherit' });
  
  // 强制推送到gh-pages分支
  console.log('Pushing to gh-pages branch...');
  execSync('git push -f origin master:gh-pages', { stdio: 'inherit' });
  
  // 清理
  console.log('Cleaning up...');
  process.chdir(process.cwd().replace('\\temp-gh-pages', ''));
  fs.rmSync(tempDir, { recursive: true, force: true });
  
  console.log('Deployment successful!');
  
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}