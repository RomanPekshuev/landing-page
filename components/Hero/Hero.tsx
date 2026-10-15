import Image from 'next/image';
import styles from './Hero.module.css';

// SVG четырехконечная звезда (sparkle)
const StarIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    width="50" 
    height="50" 
    viewBox="0 0 24 24" 
    fill="#fbbf24"
  >
    <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"/>
  </svg>
);

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Discover Our Latest Products</h1>
          <p className={styles.description}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product
          </p>
          <button className={styles.buyButton}>Buy Now</button>

          <div className={styles.reviews}>
            <div className={styles.avatars}>
              <Image src="/images/woman1.png" alt="User 1" width={40} height={40} className={styles.avatar} />
              <Image src="/images/woman2.png" alt="User 2" width={40} height={40} className={styles.avatar} />
              <Image src="/images/woman3.png" alt="User 3" width={40} height={40} className={styles.avatar} />
            </div>
            <div className={styles.reviewsText}>
              <strong>15k Well</strong>
              <span>Reviews</span>
            </div>
          </div>
        </div>

        <div className={styles.productSection}>
          {/* Маленький кружок "m" сверху */}
          <div className={styles.topBadge}>
            <div className={styles.circleGreen}>m</div>
          </div>

          {/* Звездочка сверху слева */}
          <StarIcon className={styles.starTop} />

          {/* Текст по дуге */}
          <svg className={styles.arcText} viewBox="0 0 400 120" width="400" height="120">
            <defs>
              <path id="textArc" d="M 20,100 Q 200,-20 380,100" fill="none" />
            </defs>
            <text fontSize="28" fontWeight="600" fill="#111827">
              <textPath href="#textArc" startOffset="50%" textAnchor="middle">
                Red Beats M19c2zm/a
              </textPath>
            </text>
          </svg>

          {/* Овал с наушниками */}
          <div className={styles.productWrapper}>
            <div className={styles.productOval}>
              <Image
                src="/images/beats.png"
                alt="Red Beats M19c2zm/a"
                width={300}
                height={300}
                className={styles.headphones}
                priority
              />
              <div className={styles.priceInside}>$50</div>
            </div>

            {/* Play Video слева снизу */}
            <div className={styles.playVideo}>
              <div className={styles.videoAvatarWrapper}>
                <Image src="/images/man.png" alt="Play video" width={50} height={50} className={styles.videoAvatar} />
              </div>
              <span>Play Video</span>
            </div>

            {/* Звездочка снизу справа */}
            <StarIcon className={styles.starBottom} />
          </div>
        </div>
      </div>
    </section>
  );
}