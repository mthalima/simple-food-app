import { Fragment } from "react";
import AvableMeals from "./AvableMeals";
import MealsList from "./MealsList";

const Meals = () =>{
    return <Fragment>
        <MealsList />
        <AvableMeals />
    </Fragment>
};

export default Meals;