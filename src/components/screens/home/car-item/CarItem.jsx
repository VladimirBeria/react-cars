import styles from '../Home.module.css';
export function CarItem({ car }) {
  return (
    <>
      <div className={styles.item}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${car.image})`,
          }}
        />
        <div className={styles.info}>
          <h2>{car.name}</h2>
          <p>{new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
          }).format(car.price)}</p>
        </div>
        <button>Read More</button>
      </div>
    </>
  );
}
