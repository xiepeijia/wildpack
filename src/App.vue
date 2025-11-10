<template>
  <div class="adventure-backpack-landing">
    <!-- 大胆前卫的导航栏 -->
    <header class="hero-nav">
      <div class="logo">WILDPACK</div>
      <nav class="main-nav">
        <a href="#explore" class="nav-link">探索</a>
        <a href="#features" class="nav-link">特点</a>
        <a href="#gallery" class="nav-link">画廊</a>
        <a href="#contact" class="nav-link">联系我们</a>
      </nav>
    </header>

    <!-- 艺术化英雄区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">极限探险<br>从背包开始</h1>
        <p class="hero-subtitle">为冒险者设计的艺术级装备，融合功能性与美学的完美平衡</p>
        <button class="explore-btn">发现系列</button>
      </div>
      <div class="hero-image-container">
        <div class="hero-image-wrapper">
          <img src="https://picsum.photos/id/29/800/1000" alt="探险背包" class="hero-image">
        </div>
      </div>
    </section>

    <!-- 特点展示区域 -->
    <section id="features" class="features-section">
      <div class="section-title">
        <h2>革命性设计</h2>
        <div class="title-accent"></div>
      </div>
      
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">⛰️</div>
          <h3>轻量化结构</h3>
          <p>航空级材料打造，减轻负重的同时保证强度和耐久性</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">💧</div>
          <h3>全天候防护</h3>
          <p>专业防水技术，确保装备在任何天气条件下保持干燥</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🧩</div>
          <h3>模块化设计</h3>
          <p>可定制收纳系统，根据不同探险需求灵活调整内部空间</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🏔️</div>
          <h3>人体工学背负</h3>
          <p>专利悬浮背负系统，分散重量，减少长时间负重的疲劳感</p>
        </div>
      </div>
    </section>

    <!-- 产品展示画廊 -->
    <section id="gallery" class="gallery-section">
      <div class="gallery-grid">
        <div class="gallery-item large-portrait">
          <img src="https://picsum.photos/id/28/600/900" alt="高山探险背包">
        </div>
        <div class="gallery-item square">
          <img src="https://picsum.photos/id/36/600/600" alt="徒步背包细节">
        </div>
        <div class="gallery-item wide">
          <img src="https://picsum.photos/id/180/900/600" alt="户外使用场景">
        </div>
        <div class="gallery-item square">
          <img src="https://picsum.photos/id/30/600/600" alt="背包特写">
        </div>
        <div class="gallery-item wide">
          <img src="https://picsum.photos/id/42/900/600" alt="多背包组合">
        </div>
      </div>
    </section>

    <!-- 探险故事区域 -->
    <section class="story-section">
      <div class="story-content">
        <h2>探险的艺术</h2>
        <p>WILDPACK不仅仅是背包，更是探险精神的载体。每一款设计都源自真实的户外体验，融合了艺术家的视角与工程师的精准。我们相信，装备不只是工具，更是探险者与自然之间的桥梁。</p>
        <button class="story-btn">了解设计理念</button>
      </div>
      <div class="story-image-container">
        <img src="https://picsum.photos/id/43/800/600" alt="探险故事" class="story-image">
      </div>
    </section>

    <!-- 底部区域 -->
    <section id="contact" class="contact-section">
      <div class="contact-content">
        <h2>加入探险者社区</h2>
        <p>订阅我们的通讯，获取最新产品信息和探险指南</p>
        <form class="subscribe-form">
          <input type="email" placeholder="您的邮箱地址" required>
          <button type="submit">订阅</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">WILDPACK</div>
        <div class="footer-links">
          <a href="#">隐私政策</a>
          <a href="#">使用条款</a>
          <a href="#">联系我们</a>
        </div>
        <div class="social-links">
          <a href="#" class="social-icon">🔗</a>
          <a href="#" class="social-icon">📷</a>
          <a href="#" class="social-icon">📱</a>
        </div>
      </div>
      <div class="copyright">
        © 2023 WILDPACK. 探险无界，设计无疆。
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AdventureBackpackLanding',
  data() {
    return {
      // 移除购物车相关数据
    }
  },
  methods: {
    // 移除购物车相关方法
  }
}
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>

<style scoped>
/* 大胆前卫的艺术化设计 - 户外背包主题 */
:root {
  --primary: #2A3B4C;
  --accent: #FF5A36;
  --light: #F7F9FC;
  --dark: #131B24;
  --neutral: #7D899C;
}

.adventure-backpack-landing {
  width: 100%;
  min-height: 100vh;
  background-color: var(--light);
}

/* 英雄导航栏 */
.hero-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), transparent);
}

.logo {
  font-size: 1.8rem;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.main-nav {
  display: flex;
  gap: 3rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--accent);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* 英雄区域 - 大胆艺术化设计 */
.hero-section {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  background-color: var(--primary);
  color: white;
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(42, 59, 76, 0.95), rgba(42, 59, 76, 0.8));
  z-index: -1;
}

.hero-title {
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.9);
}

.explore-btn {
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.explore-btn:hover {
  background-color: white;
  color: var(--accent);
  transform: translateX(10px);
}

.hero-image-container {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.hero-image-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  transition: transform 1s ease;
}

.hero-section:hover .hero-image-wrapper {
  transform: scale(1.1);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 特点部分 */
.features-section {
  padding: 8rem 4rem;
  background-color: white;
  position: relative;
  overflow: hidden;
}

.section-title {
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 1rem;
}

.title-accent {
  width: 50px;
  height: 4px;
  background-color: var(--accent);
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.feature-item {
  background-color: var(--light);
  padding: 2.5rem;
  border-radius: 8px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  transform: translateY(0);
}

.feature-item:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--accent);
}

.feature-item h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1rem;
}

.feature-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--neutral);
}

/* 画廊部分 - 艺术化布局 */
.gallery-section {
  padding: 4rem 0;
  background-color: var(--dark);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(300px, auto);
  gap: 1px;
  background-color: rgba(255, 255, 255, 0.1);
}

.gallery-item {
  overflow: hidden;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover::before {
  opacity: 1;
}

.gallery-item.large-portrait {
  grid-row: span 2;
}

.gallery-item.wide {
  grid-column: span 2;
}

/* 故事部分 */
.story-section {
  display: flex;
  align-items: stretch;
  min-height: 80vh;
  background-color: white;
}

.story-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  background-color: var(--light);
}

.story-content h2 {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 2rem;
  line-height: 1.2;
}

.story-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--neutral);
  margin-bottom: 2.5rem;
}

.story-btn {
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 1.1rem 2rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.story-btn:hover {
  background-color: var(--accent);
  transform: translateY(-3px);
}

.story-image-container {
  flex: 1;
  overflow: hidden;
}

.story-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.story-section:hover .story-image {
  transform: scale(1.05);
}

/* 联系部分 */
.contact-section {
  padding: 8rem 4rem;
  background-color: var(--primary);
  text-align: center;
  color: white;
}

.contact-content h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.contact-content p {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.9);
}

.subscribe-form {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  gap: 0;
}

.subscribe-form input {
  flex: 1;
  padding: 1.2rem 1.5rem;
  border: none;
  font-size: 1rem;
  outline: none;
}

.subscribe-form button {
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.subscribe-form button:hover {
  background-color: #ff7354;
}

/* 页脚 */
.footer {
  background-color: var(--dark);
  color: white;
  padding: 4rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icon:hover {
  color: var(--accent);
  transform: scale(1.2);
}

.copyright {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
}

/* 移动端响应式设计 */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 4rem;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-section {
    flex-direction: column;
    height: auto;
  }
  
  .hero-content,
  .hero-image-container {
    flex: none;
    width: 100%;
    min-height: 60vh;
  }
  
  .hero-nav {
    padding: 1.5rem 2rem;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .main-nav {
    gap: 2rem;
  }
  
  .story-section {
    flex-direction: column;
  }
  
  .story-content,
  .story-image-container {
    flex: none;
    width: 100%;
    min-height: 50vh;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 2rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .features-section,
  .contact-section {
    padding: 5rem 2rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-item.large-portrait,
  .gallery-item.wide {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .hero-nav {
    padding: 1rem;
  }
  
  .main-nav {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-title h2,
  .story-content h2 {
    font-size: 2rem;
  }
  
  .subscribe-form {
    flex-direction: column;
  }
  
  .footer {
    padding: 3rem 1rem;
  }
}
</style>