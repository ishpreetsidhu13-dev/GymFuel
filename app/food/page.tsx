
'use client';

import { useState, useEffect } from "react";
import { Recipe } from "@/app/types/food";
import { useFoodContext } from "@/app/context/globalContext";
import PageTitle from "@/app/components/pageTitle";

export default function FoodSearch() {

    const { addFood } = useFoodContext();

    const [search, setSearch] = useState<string>("");
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [name, setName] = useState<string>("");
    const [calories, setCalories] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        fetch("https://dummyjson.com/recipes?limit=12")
            .then(response => response.json())
            .then(data => setRecipes(data.recipes || []))
            .catch(() => setMessage("Unable to load recipes."));
    }, []);

    const searchRecipes = () => {
        setMessage("");

        fetch(`https://dummyjson.com/recipes/search?q=${encodeURIComponent(search)}`)
            .then(response => response.json())
            .then(data => setRecipes(data.recipes || []))
            .catch(() => setMessage("Search failed."));
    }

    const addRecipe = (recipe: Recipe) => {
        addFood({
            id: Date.now() + Math.random(),
            name: recipe.name,
            calories: recipe.caloriesPerServing
        });

        setMessage("Food added to your log.");
    }

    const addCustomFood = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name.trim() === "" || Number(calories) <= 0) {
            return;
        }

        addFood({
            id: Date.now() + Math.random(),
            name: name.trim(),
            calories: Number(calories)
        });

        setName("");
        setCalories("");
        setMessage("Food added to your log.");
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRecipes();
    }

    return (
        <main>
            <PageTitle
                title="Food Search"
                description="Search recipes and track your calories."
            />

            <div className="card">
                <h2>Search Recipes</h2>

                <form onSubmit={handleSearch} className="searchForm">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search chicken, pasta, pizza..."
                        aria-label="Search recipes"
                    />

                    <button type="submit">Search</button>
                </form>

                {message && (
                    <p className="successMessage">{message}</p>
                )}

                {recipes.length === 0 && (
                    <p>No recipes found.</p>
                )}

                <div className="recipeGrid">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="recipeCard">
                            <h3>{recipe.name}</h3>
                            <p>{recipe.caloriesPerServing} kcal per serving</p>

                            <button onClick={() => addRecipe(recipe)}>
                                Add to Log
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card">
                <h2>Add Your Own Food</h2>

                <form onSubmit={addCustomFood} className="customForm">
                    <label htmlFor="foodName">Food Name</label>

                    <input
                        id="foodName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="calories">Calories (kcal)</label>

                    <input
                        id="calories"
                        type="number"
                        min="1"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required
                    />

                    <button type="submit">Add Food</button>
                </form>
            </div>
        </main>
    );
}
