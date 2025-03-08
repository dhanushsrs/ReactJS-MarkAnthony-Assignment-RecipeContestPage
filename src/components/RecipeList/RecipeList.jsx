import React, { useState } from "react";
import "./RecipeList.css";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeList = ({ recipes }) => {
  // State for sorting criteria
  const [sortCriteria, setSortCriteria] = useState("newest");

  // Function to sort by Upload Date
  const sortByDate = (a, b) => {
    if (sortCriteria === "newest") {
      return new Date(b.uploadedOn) - new Date(a.uploadedOn);
    } else {
      return new Date(a.uploadedOn) - new Date(b.uploadedOn);
    }
  };

  // Function to sort by Average Rating
  const sortByRating = (a, b) => {
    if (sortCriteria === "highestRating") {
      return b.avgRating - a.avgRating;
    } else {
      return a.avgRating - b.avgRating;
    }
  };

  // Function to handle sorting change
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  // Sort the recipes based on the selected criteria
  const sortedRecipes = recipes.sort((a, b) => {
    if (sortCriteria === "newest" || sortCriteria === "oldest") {
      return sortByDate(a, b);
    } else if (
      sortCriteria === "highestRating" ||
      sortCriteria === "lowestRating"
    ) {
      return sortByRating(a, b);
    }
    return 0;
  });

  return (
    <div className="recipe-list">
      <div className="sort-options">
        <select onChange={handleSortChange} value={sortCriteria}>
          <option value="newest">Newest Upload Date</option>
          <option value="oldest">Oldest Upload Date</option>
          <option value="highestRating">Highest Rating</option>
          <option value="lowestRating">Lowest Rating</option>
        </select>
      </div>

      <div className="recipe-cards">
        {sortedRecipes.map((recipe) => (
          <RecipeCard key={recipe.name} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
