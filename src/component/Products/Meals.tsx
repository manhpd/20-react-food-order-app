import { useEffect, useState } from "react";
import Meal from "./Meal";

export default function Meals() {
   
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/meals")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setMeals(data);
            });
    }, []);
    return (
        <main>
            <ul  id="meals">
                {meals.map(meal => (
                    <Meal meal={meal}></Meal>
                ))}
            </ul>
        </main>
    );
}