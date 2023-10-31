import styles from "./Carousel.module.scss";

const CarouselItem = ({ item }) => {
  return (
    <div className={styles.carouselItem}>
      <div></div>
      <img src={item.image} alt="" className={styles.img} />
      <div className={styles.text}>{item.desc}</div>
    </div>
  );
};

export default CarouselItem;
