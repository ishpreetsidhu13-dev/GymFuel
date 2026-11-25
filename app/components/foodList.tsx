
'use client';

import { Food } from "@/app/types/food";
import { useFoodContext } from "@/app/context/globalContext";

export default function FoodList({ foods }: { foods: Food[] }) {

    const { deleteFood } = useFoodContext();

    return (
        <ul className="foodList">
            {foods.map((food) => (
                <li key={food.id} className="foodRow">
                    <div>
                        <strong>{food.name}</strong>
                        <p>{food.calories} kcal</p>
                    </div>

                    <button
                        onClick={() => deleteFood(food.id)}
                        className="deleteButton"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
