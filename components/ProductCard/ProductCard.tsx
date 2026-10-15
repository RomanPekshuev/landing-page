import Image from 'next/image';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
}

export default function ProductCard({ 
  name, 
  price, 
  rating, 
  reviews, 
  image,
  discount 
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          width={344}
          height={100}
          className={styles.image}
        />
        {discount && (
          <span className={styles.badge}>Save {discount}%</span>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.rating}>
          {'★'.repeat(rating)}
          <span className={styles.reviews}>({reviews} Reviews)</span>
        </div>
        <p className={styles.price}>${price}</p>
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  );
}