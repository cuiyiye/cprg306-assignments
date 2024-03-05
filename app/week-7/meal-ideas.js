'use client';

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealDetails, setSelectedMealDetails] = useState(null);
  const [ingredients, setIngredients] = useState([]);

async function fetchMealIdeas(ingredient) {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}');
  const data = await response.json();
  return data.meals;
};

async function fetchMealDetails(mealId) {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}');
  const data = await response.json();
  return data.meals[0];
};

async function loadMealIdeas(ingredient) {
  const newMeals = await fetchMealIdeas(ingredient);
  setMeals(newMeals);

async function loadMealDetails(mealId) {
  const mealDetails = await fetchMealIdeas(mealId);
  const ingredientsList = [];
  for (let i = 1; i <= 20; i++) { // TheMealDB has up to 20 ingredients
    if (mealDetails[`strIngredient${i}`]) {
      ingredientsList.push(`${mealDetails[`strIngredient${i}`]} - ${mealDetails[`strMeasure${i}`]}`);
    }
  }
  setSelectedMealDetails(mealDetails);
  setIngredients(ingredientsList);
};

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <p>Here are some meal ideas using {ingredient}:</p>
      <ul>
      {meals && meals.length > 0 ? (
          meals.map(meal => (
            <li key={meal.idMeal} onClick={() => loadMealDetails(meal.idMeal)}>{meal.strMeal}</li>
          ))
        ) : (
          <h3>No meal ideas found</h3>
        )}
      </ul>
      {selectedMeal && (
      <div>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    )}
      
    </div>
  );
}
}