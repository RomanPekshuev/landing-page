import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.subscribe}>
            <h3>Subscribe to our Website</h3>
            <div className={styles.form}>
              <input 
                type="email" 
                placeholder="Email address" 
                className={styles.input}
              />
              <button className={styles.submit}>→</button>
            </div>
          </div>
          
          <div className={styles.footerImages}>
            <Image src="/images/FooterPods1.png" alt="Pods 1" width={100} height={100} />
            <Image src="/images/FooterPods2.png" alt="Pods 2" width={100} height={100} />
          </div>
          
          <button className={styles.getStart}>Get started</button>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4>Services</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Benefits</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Help</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.social}>
            <a href="#" className={styles.icon}>f</a>
            <a href="#" className={styles.icon}>t</a>
            <a href="#" className={styles.icon}>📷</a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© 2024 ShopBrand. Все права защищены.</p>
          <div className={styles.links}>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}