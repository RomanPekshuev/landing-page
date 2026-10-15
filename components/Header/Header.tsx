import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип Shopper */}
        <div className={styles.logo}>
          <span className={styles.logoShop}>Shop</span>
          <span className={styles.logoPer}>per</span>
        </div>

        {/* Поиск */}
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search Items" 
            className={styles.searchInput}
          />
          <button className={styles.searchBtn} aria-label="Поиск">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>

        {/* Кнопка корзины */}
        <button className={styles.cartBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span>0 Items Added</span>
        </button>

        {/* Кнопка входа */}
        <button className={styles.loginBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Login or Sign Up</span>
        </button>
      </div>
    </header>
  );
}