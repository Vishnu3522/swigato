// Foods.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Foods.css';

function Foods({ searchQuery }) {
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
        const response = await axios.get(apiUrl);

        // Update state with the fetched meal data
        setMealData(response.data.meals);
      } catch (error) {
        console.error('Error fetching meal data:', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, [searchQuery]);

  return (
    <div className="foods-container">
      <h1>Meal Details</h1>
      {mealData ? (
        <div className="meals-list">
          {mealData.map((meal) => (
            <div key={meal.idMeal} className="meal-item">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="round-image" />
              <h2>{meal.strMeal}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Foods;
