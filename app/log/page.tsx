
'use client';

import Link from "next/link";
import { useFoodContext } from "@/app/context/globalContext";
import FoodList from "@/app/components/foodList";
import PageTitle from "@/app/components/pageTitle";

export default function FoodLog() {

    const { foods } = useFoodContext();

    const totalCalories = foods.reduce(
        (total, food) => total + food.calories, 0
    );

    return (
        <main>
            <PageTitle
                title="My Food Log"
                description="See the foods you have added and remove any item."
            />

            <div className="card">
                <h2>Logged Foods ({foods.length})</h2>

                <p>
                    Total calories: <strong>{totalCalories} kcal</strong>
                </p>

                {foods.length === 0 ? (
                    <p>
                        No foods logged yet.{" "}
                        <Link href="/food" className="textLink">
                            Add food
                        </Link>
                    </p>
                ) : (
                    <FoodList foods={foods} />
                )}
            </div>
        </main>
    );
}
