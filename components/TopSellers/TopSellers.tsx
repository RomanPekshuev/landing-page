import ProductCard from '../ProductCard/ProductCard';
import styles from './TopSellers.module.css';

const products = [
  {
    id: 1,
    name: 'Boat Rockerz 333',
    price: 20,
    rating: 5,
    reviews: 75,
    image: '/images/BoatRockerz333.png',
    discount: 60,
  },
  {
    id: 2,
    name: 'Boat Kerz 234',
    price: 40,
    rating: 5,
    reviews: 70,
    image: '/images/BoatKerz234.png',
  },
  {
    id: 3,
    name: 'Boat Rockerz 323',
    price: 30,
    rating: 5,
    reviews: 70,
    image: '/images/BoatRockerz323.png',
    discount: 40,
  },
];

export default function TopSellers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Top Sellers</h2>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>Top Picks</button>
          <button className={styles.tab}>Watches</button>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}