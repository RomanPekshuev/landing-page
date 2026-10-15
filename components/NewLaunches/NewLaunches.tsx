import Image from 'next/image';
import styles from './NewLaunches.module.css';

export default function NewLaunches() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>New Launches</h2>
        <div className={styles.product}>
          <div className={styles.images}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/Footer.png"
                alt="Airdrop 500 Anc"
                width={300}
                height={300}
                className={styles.mainImage}
              />
            </div>
          </div>
          <div className={styles.info}>
            <h3 className={styles.productName}>Airdrop 500 Anc</h3>
            <p className={styles.description}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product...
              <a href="#" className={styles.readMore}>Read More</a>
            </p>
            <p className={styles.price}>Price: <span>$45.99</span></p>
            <div className={styles.colors}>
              <span className={`${styles.color} ${styles.black}`}></span>
              <span className={`${styles.color} ${styles.yellow}`}></span>
              <span className={`${styles.color} ${styles.blue}`}></span>
            </div>
            <div className={styles.actions}>
              <button className={styles.addButton}>Add to cart</button>
              <button className={styles.exploreButton}>Explore More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}