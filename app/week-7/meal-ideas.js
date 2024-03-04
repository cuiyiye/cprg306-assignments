'use client';

import { useState, useEffect } from 'react';

async function fetchMealIdeas() {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}");
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ingredient}) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const newMeals = await fetchMealIdeas();
    setMeals(newMeals);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white py-4">Meal Ideas</h2>
      <ul>
      {meals && meals.length > 0 ? (
          meals.map(meal => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))
        ) : (
          <li>No meals found.</li>
        )}
      </ul>
    </div>
  );
}