import styles from './Features.module.css';

const featuresData = [
  {
    icon: '⚡',
    title: 'Высокая скорость',
    description: 'Оптимизированная производительность для мгновенной загрузки.',
  },
  {
    icon: '🛡️',
    title: 'Безопасность',
    description: 'Надёжная защита ваших данных с помощью современных технологий.',
  },
  {
    icon: '🎨',
    title: 'Гибкий дизайн',
    description: 'Полная кастомизация под потребности вашего бренда.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}