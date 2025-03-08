import React, { useState, useEffect } from "react";
import "./FilterSidebar.css";

const FilterSidebar = ({ setFilters }) => {
  // Initial filters state (default values)
  const initialFilters = {
    mealType: "",
    dishType: "",
    testKitchenApproved: false,
    contestWinner: false,
    featured: false,
  };

  // State to track selected filters
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);

  // Handle changes to filter inputs (dropdowns and checkboxes)
  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Apply the selected filters (send them to the parent component)
  const applyFilters = () => {
    setFilters(selectedFilters);
  };

  // Handle clearing of all filters
  const handleClearFilters = () => {
    // Reset the selected filters to their initial state
    setSelectedFilters(initialFilters);
    // Reset the filters in the parent component (App.js)
    setFilters(initialFilters);
  };

  // Reset to default values when the component is re-rendered or filters are cleared
  useEffect(() => {
    // This hook can be used to reset the state when necessary
  }, [setFilters]);

  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>

      {/* Meal Type Dropdown */}
      <label>
        Meal Type:
        <select
          name="mealType"
          value={selectedFilters.mealType}
          onChange={handleFilterChange}
        >
          <option value="">Any</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Dessert">Dessert</option>
          <option value="Breakfast">Breakfast</option>
        </select>
      </label>

      {/* Dish Type Dropdown */}
      <label>
        Dish Type:
        <select
          name="dishType"
          value={selectedFilters.dishType}
          onChange={handleFilterChange}
        >
          <option value="">Any</option>
          <option value="Curry">Curry</option>
          <option value="Pizza">Pizza</option>
          <option value="Seafood">Seafood</option>
          <option value="Soup">Soup</option>
          <option value="Mexican">Mexican</option>
          <option value="Smoothie">Smoothie</option>
        </select>
      </label>

      {/* Checkboxes for filters */}
      <label>
        <input
          type="checkbox"
          name="testKitchenApproved"
          checked={selectedFilters.testKitchenApproved}
          onChange={handleFilterChange}
        />
        Test Kitchen Approved
      </label>

      <label>
        <input
          type="checkbox"
          name="contestWinner"
          checked={selectedFilters.contestWinner}
          onChange={handleFilterChange}
        />
        Contest Winner
      </label>

      <label>
        <input
          type="checkbox"
          name="featured"
          checked={selectedFilters.featured}
          onChange={handleFilterChange}
        />
        Featured
      </label>

      {/* Buttons to apply filters and clear filters */}
      <div className="btn-container">
        <button onClick={applyFilters}>Apply Filters</button>
        <button onClick={handleClearFilters}>Clear All Filters</button>
      </div>
    </div>
  );
};

export default FilterSidebar;
