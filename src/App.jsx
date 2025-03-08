import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import RecipeList from "./components/RecipeList/RecipeList";
import recipes from "./data/data";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";

const App = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    let tempRecipes = [...recipes];

    // Filter by search term
    if (searchTerm) {
      tempRecipes = tempRecipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(searchTerm) ||
          recipe.chef.toLowerCase().includes(searchTerm) ||
          recipe.description.toLowerCase().includes(searchTerm)
        );
      });
    }

    // Filter by other selected filters
    if (filters.mealType) {
      tempRecipes = tempRecipes.filter(
        (recipe) => recipe.mealType === filters.mealType
      );
    }

    if (filters.dishType) {
      tempRecipes = tempRecipes.filter(
        (recipe) => recipe.dishType === filters.dishType
      );
    }

    if (filters.testKitchenApproved) {
      tempRecipes = tempRecipes.filter((recipe) => recipe.testKitchenApproved);
    }

    if (filters.contestWinner) {
      tempRecipes = tempRecipes.filter((recipe) => recipe.contestWinner);
    }

    if (filters.featured) {
      tempRecipes = tempRecipes.filter((recipe) => recipe.featured);
    }

    setFilteredRecipes(tempRecipes);
  }, [searchTerm, filters]);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <FilterSidebar setFilters={setFilters} />
        <div className="recipe-section">
          <SearchBar setSearchTerm={setSearchTerm} />
          <RecipeList recipes={filteredRecipes} />
        </div>
      </div>
    </div>
  );
};

export default App;
