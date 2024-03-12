'use client';

import { useState, useEffect } from 'react';

export default function MealIdeas({ingredient}) { 
  const [meals, setMeals] = useState([]);


async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

async function loadMealIdeas() {
  const newMeals = await fetchMealIdeas(ingredient);
  setMeals(newMeals);
}

  useEffect(() => {
    if (ingredient){
      loadMealIdeas();}}, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white">Meal Ideas</h2>
      <p className="text-sm font-bold text-white" >Here are some meal ideas using {ingredient}:</p>
      <ul>
      {meals && meals.length > 0 ? (
          meals.map(meal => (
            <li className = "m-5 ml-4 bg-gray-900 max-w-xs" key={meal.idMeal} onClick={() => loadMealDetails(meal.idMeal)}>{meal.strMeal}</li>
          ))
        ) : (
          <h3 className="text-sm font-bold text-white">No meal ideas found</h3>
        )}
      </ul>
      {/* {selectedMeal && (
      <div>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    )} */}
      
    </div>
  );
}
