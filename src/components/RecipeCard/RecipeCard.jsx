import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imgUrl} alt={recipe.name} className="recipe-card-img" />
      <div className="recipe-card-content">
        <h3>{recipe.name}</h3>
        <p>Chef: {recipe.chef}</p>
        <p>
          Rating: {recipe.avgRating} ({recipe.totalRatings} ratings)
        </p>
        <p>{recipe.description}</p>
        <p>Uploaded on: {recipe.uploadedOn}</p>
        {recipe.featured && <span className="featured-tag">Featured</span>}
        {recipe.contestWinner && (
          <span className="contest-winner-tag">Contest Winner</span>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
