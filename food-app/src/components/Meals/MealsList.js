import classes from './MealsList.module.css';

const MealsList= () => {
  return (
    <section className={classes.summary}>
      <h2>Delivery do nosso Restaurante FoodAPP</h2>
      <p>
        Escolha algo do nosso cardápio do dia, todos nossos pratos sao feitos com produtos de qualidade e frescos.
      </p>
    </section>
  );
};

export default MealsList;