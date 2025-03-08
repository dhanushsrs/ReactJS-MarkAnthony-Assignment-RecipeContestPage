### Recipes Page - Online Recipe Contest Application
This project is a responsive Recipes Page for an online recipe contest application, featuring a clean, visually appealing design. Users can search, sort, and filter recipes for a better experience. It aims to provide hands-on experience with React.js, component-based architecture, and data manipulation.

### Objective
The goal of this project is to:

  * Build a responsive and functional Recipes Page that mimics the provided UI design.
  * Implement features like searching, sorting, and filtering of recipes.
  * Gain practical experience in frontend development with React.js and CSS.

### Technologies Used
  1. React.js: For building the frontend using component-based architecture.
  2. Vite: A fast build tool and development server for React.js.
  3. CSS: For styling the components, including responsive design using media queries.
  4. ImageKit: Used for image optimization to enhance page load times.
  5. Animations (CSS): For adding subtle animations to the Recipe Cards.

### Project Structure
The app is designed with a clean and modular component structure. Here's an overview:
## Components:
RecipeCard:
  * Displays individual recipe information such as title, description, and image.
  * Includes CSS animations for smooth transitions when recipes appear.
FilterSidebar:
  * Contains options for filtering recipes based on various criteria (e.g., cuisine, difficulty, time).
SearchBar:
  * Provides a search feature that allows users to find recipes by name or ingredients.
RecipeList:
  * Renders the list of RecipeCard components based on the applied filters and search results.
Header:
  * Displays the page title and optional navigation elements. (User profile and other features can be added later.)

Data:
data.js: Contains a set of dummy data representing recipes for testing and development.

### Features
  * Search Functionality: Easily search for recipes by name or ingredients using the SearchBar component.
  * Filter Recipes: Apply filters based on criteria like cuisine, difficulty, or time.
  * Responsive Design: The page layout adapts to different screen sizes using CSS media queries.
  * Image Optimization: All recipe images are optimized for faster load times using ImageKit.
  * CSS Animations: Subtle animations enhance the user experience when interacting with recipe cards.

### Installation
To set up the project locally, follow these steps:
Clone the repository:
git clone <repository_url>

Navigate to the project folder:
cd <project_folder>

Install the dependencies:
npm install

Run the development server:
npm run dev

Open the app in your browser at http://localhost:5173.

### Usage
  * The app loads with a list of recipes that can be searched or filtered.
  * Use the SearchBar to find recipes by name or ingredients.
  * Use the FilterSidebar to narrow down recipes based on specific criteria.
  * Recipe cards have animations when they appear and respond to user interaction.

