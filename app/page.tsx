
'use client';

import Link from "next/link";
import { useFoodContext } from "@/app/context/globalContext";
import PageTitle from "@/app/components/pageTitle";

export default function Home() {

    const { foods, calorieGoal, setCalorieGoal } = useFoodContext();

    let totalCalories = 0;

    foods.forEach((food) => {
        totalCalories = totalCalories + food.calories;
    });

    const remainingCalories = calorieGoal - totalCalories;

    const progress = (totalCalories / calorieGoal) * 100;

    const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newGoal = Number(e.target.value);

        if (newGoal > 0) {
            setCalorieGoal(newGoal);
        }
    }

    return (
        <main className="w-full max-w-5xl mx-auto px-5 py-10">

            <PageTitle
                title="Your daily fuel"
                description="A simple way to keep track of what you eat."
            />

            <section className="bg-zinc-900 border border-purple-900 rounded-lg p-6 mb-6">

                <h2 className="text-2xl font-bold text-white mb-5">
                    Daily Calorie Summary
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

                    <div className="bg-purple-950 border border-purple-800 rounded-lg p-5">
                        <p className="text-purple-200">Goal</p>
                        <h3 className="text-3xl font-bold text-purple-400">
                            {calorieGoal}
                        </h3>
                        <p className="text-gray-300">kcal</p>
                    </div>

                    <div className="bg-purple-950 border border-purple-800 rounded-lg p-5">
                        <p className="text-purple-200">Consumed</p>
                        <h3 className="text-3xl font-bold text-purple-400">
                            {totalCalories}
                        </h3>
                        <p className="text-gray-300">kcal</p>
                    </div>

                    <div className="bg-purple-950 border border-purple-800 rounded-lg p-5">
                        <p className="text-purple-200">Remaining</p>
                        <h3 className="text-3xl font-bold text-purple-400">
                            {remainingCalories}
                        </h3>
                        <p className="text-gray-300">kcal</p>
                    </div>

                </div>

                <div className="w-full bg-zinc-700 rounded-full h-4 overflow-hidden mb-3">
                    <div
                        className="bg-purple-600 h-full"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                </div>

                <p className="text-gray-300 mb-5">
                    {Math.round(progress)}% of daily goal
                </p>

                <label
                    htmlFor="goal"
                    className="block text-white font-bold mb-2"
                >
                    Change daily calorie goal
                </label>

                <input
                    id="goal"
                    type="number"
                    min="1"
                    value={calorieGoal}
                    onChange={handleGoalChange}
                    className="w-full max-w-md bg-zinc-800 text-white border border-purple-700 rounded-lg p-3"
                />

            </section>

            <section className="bg-zinc-900 border border-purple-900 rounded-lg p-6 mb-6">

                <h2 className="text-2xl font-bold text-white mb-4">
                    Start Tracking
                </h2>

                <p className="text-gray-300 mb-5">
                    Search recipes to find calories per serving, or add your own food.
                </p>

                <Link
                    href="/food"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-3 rounded-lg"
                >
                    Search Food
                </Link>

            </section>

        </main>
    );
}
