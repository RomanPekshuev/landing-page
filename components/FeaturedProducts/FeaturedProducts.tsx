import Image from 'next/image';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.subtitle}>Apple wireless Airpod</h2>
          <div className={styles.images}>
            <div className={styles.imageCard}>
              <Image src="/images/airpods1.png" alt="White AirPod" width={120} height={180} />
            </div>
            <div className={styles.imageCard}>
              <Image src="/images/airpods2.png" alt="Black AirPod" width={120} height={180} />
            </div>
            <div className={styles.imageCard}>
              <Image src="/images/airpods3.png" alt="AirPod with plant" width={120} height={180} />
            </div>
          </div>
          <p className={styles.price}>Price: <span>$45.99</span></p>
        </div>

        <div className={styles.right}>
          <div className={styles.iconBadge}>T</div>
          <h3 className={styles.title}>Our Featured Products</h3>
          <p className={styles.description}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product
          </p>
          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Add to cart</button>
            <button className={styles.btnSecondary}>View more</button>
          </div>
        </div>
      </div>
    </section>
  );
}