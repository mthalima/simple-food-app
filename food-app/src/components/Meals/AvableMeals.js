import classes from "./AvableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Açaí",
    description: "Açaí puro do Brasil",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Pizza 8 pedaços, esolha o sabor no carápio",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Ovelhas Burguer",
    description: "Hamburguer do ovelhas",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Salada de vegetais frescos",
    price: 18.99,
  },
];

const AvableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvableMeals;
