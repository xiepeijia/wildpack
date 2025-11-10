<template>
  <div class="adventure-backpack-landing">
    <!-- 大胆前卫的导航栏 -->
    <header class="hero-nav">
      <div class="logo">WILDPACK</div>
      <nav class="main-nav">
        <a href="#explore" class="nav-link">Explore</a>
        <a href="#features" class="nav-link">Features</a>
        <a href="#gallery" class="nav-link">Gallery</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
    </header>

    <!-- 艺术化英雄区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Adventure<br>Starts Here</h1>
        <p class="hero-subtitle">Premium backpacks designed for explorers, where functionality meets artistic excellence</p>
        <button class="explore-btn">Explore Collection</button>
      </div>
      <div class="hero-image-container">
        <div class="hero-image-wrapper">
          <img :src="images.hero" alt="Premium Outdoor Backpack" class="hero-image">
        </div>
      </div>
    </section>

    <!-- 背包特点展示 -->
    <section id="features" class="features-section">
      <div class="section-title">
        <h2>Backpack Innovation</h2>
        <div class="title-accent"></div>
      </div>
      
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">🎒</div>
          <h3>Ultralight Construction</h3>
          <p>Aircraft-grade materials create backpacks that are lightweight yet incredibly strong and durable</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">💧</div>
          <h3>Weatherproof Design</h3>
          <p>Professional waterproof technology ensures your backpack and its contents stay dry in any conditions</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🧩</div>
          <h3>Modular Organization</h3>
          <p>Customizable storage systems that adapt to different backpacking needs with flexible interior space</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🏔️</div>
          <h3>Ergonomic Suspension</h3>
          <p>Patented suspension system distributes weight evenly, reducing fatigue during long treks</p>
        </div>
      </div>
    </section>

    <!-- 产品展示画廊 -->
    <section id="gallery" class="gallery-section">
      <div class="gallery-grid">
        <div class="gallery-item large-portrait">
          <img :src="images.gallery[0]" alt="Alpine Backpack">
        </div>
        <div class="gallery-item square">
          <img :src="images.gallery[1]" alt="Backpack Details">
        </div>
        <div class="gallery-item wide">
          <img :src="images.gallery[2]" alt="Backpack Closeup">
        </div>
        <div class="gallery-item square">
          <img :src="images.gallery[3]" alt="Backpack Showcase">
        </div>
        <div class="gallery-item wide">
          <img :src="images.gallery[4]" alt="Backpack in Use">
        </div>
      </div>
    </section>

    <!-- 探险故事区域 -->
    <section class="story-section">
      <div class="story-content">
        <h2>The Art of Backpacking</h2>
        <p>WILDPACK is more than just backpacks—it's the essence of exploration. Each design is born from real outdoor experiences, combining artistic vision with engineering precision. We believe gear isn't just equipment; it's the bridge between explorer and nature.</p>
        <button class="story-btn">Discover Design Philosophy</button>
      </div>
      <div class="story-image-container">
        <img :src="images.story" alt="Backpack Design Story" class="story-image">
      </div>
    </section>

    <!-- 底部区域 -->
    <section id="contact" class="contact-section">
      <div class="contact-content">
        <h2>Join the Explorer Community</h2>
        <p>Subscribe to our newsletter for the latest product updates and backpacking guides</p>
        <form class="subscribe-form">
          <input type="email" placeholder="Your email address" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">WILDPACK</div>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="social-links">
          <a href="#" class="social-icon">🔗</a>
          <a href="#" class="social-icon">📷</a>
          <a href="#" class="social-icon">📱</a>
        </div>
      </div>
      <div class="copyright">
        © 2023 WILDPACK. Unlimited Exploration, Boundless Design.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AdventureBackpackLanding',
  data() {
    return {
      // 图片配置 - 方便替换的图片路径对象
      images: {
        hero: 'https://picsum.photos/id/1060/800/1000', // 背包特写
        gallery: [
          'https://picsum.photos/id/1059/600/900', // 户外背包
          'https://picsum.photos/id/1057/600/600', // 背包细节
          'https://picsum.photos/id/1058/900/600', // 背包特写
          'https://picsum.photos/id/1061/600/600', // 背包展示
          'https://picsum.photos/id/1062/900/600'  // 背包使用场景
        ],
        story: 'https://picsum.photos/id/1063/800/600' // 背包设计故事
      }
    }
  },
  methods: {
    // 可以添加图片管理方法，如更新图片路径等
    updateImage(category, index, newUrl) {
      if (category === 'gallery' && this.images.gallery[index] !== undefined) {
        this.images.gallery[index] = newUrl;
      } else if (this.images[category]) {
        this.images[category] = newUrl;
      }
    }
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
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
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
  background-color: var(--primary);
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
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  letter-spacing: -1px;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.9);
  animation: fadeInUp 1s ease-out 0.4s both;
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
  border-radius: 2px;
  box-shadow: 0 5px 15px rgba(255, 90, 54, 0.3);
  animation: fadeInUp 1s ease-out 0.6s both;
}

.explore-btn:hover {
  background-color: white;
  color: var(--accent);
  transform: translateX(10px) translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 90, 54, 0.4);
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
  animation: slideInRight 1.2s ease-out both;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  animation: fadeInUp 0.8s ease-out both;
}

.feature-item:nth-child(1) { animation-delay: 0.2s; }
.feature-item:nth-child(2) { animation-delay: 0.4s; }
.feature-item:nth-child(3) { animation-delay: 0.6s; }
.feature-item:nth-child(4) { animation-delay: 0.8s; }

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  gap: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 100%;
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
  position: relative;
}

.story-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(2rem, 5vw, 4rem);
  background-color: var(--light);
  position: relative;
  z-index: 1;
}

.story-content h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -1px;
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
  box-shadow: 0 8px 20px rgba(255, 90, 54, 0.3);
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
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.subscribe-form input {
  flex: 1;
  padding: 1.2rem 1.5rem;
  border: none;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  background-color: white;
}

.subscribe-form button {
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
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
  flex-wrap: wrap;
  gap: 2rem;
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

/* 全局动画定义 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 移动端响应式设计 */
@media (max-width: 1200px) {
  .hero-title {
    font-size: clamp(3rem, 6vw, 4rem);
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-content,
  .hero-image-container {
    flex: 1;
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
    text-align: center;
    align-items: center;
  }
  
  .hero-title {
    font-size: clamp(2rem, 8vw, 3.5rem);
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
  
  .subscribe-form {
    flex-direction: column;
    width: 90%;
  }
  
  .feature-item {
    padding: 2rem 1.5rem;
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