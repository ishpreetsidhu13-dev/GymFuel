
'use client';

import { createContext, useContext, ReactNode, useState } from "react";
import { Food } from "@/app/types/food";

type FoodContextType = {
    foods: Food[];
    addFood: (food: Food) => void;
    deleteFood: (id: number) => void;
    calorieGoal: number;
    setCalorieGoal: (goal: number) => void;
}

export const GlobalContext = createContext<FoodContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {

    const [foods, setFoods] = useState<Food[]>([]);
    const [calorieGoal, setCalorieGoal] = useState<number>(2500);

    const addFood = (food: Food) => {
        setFoods(currentFoods => [...currentFoods, food]);
    }

    const deleteFood = (id: number) => {
        setFoods(currentFoods => currentFoods.filter(food => food.id !== id));
    }

    return (
        <GlobalContext.Provider
            value={{
                foods,
                addFood,
                deleteFood,
                calorieGoal,
                setCalorieGoal
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export function useFoodContext() {

    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("FoodContext needs a Provider");
    }

    return context;
}
