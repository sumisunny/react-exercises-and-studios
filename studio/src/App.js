
import './App.css';
import RecipeDescription from './components/Description.js';
import RecipeIngredients from './components/RecipeIngredients.js';
import RecipePhoto from './components/RecipePhoto.js';

function App() {
  return (
    <div className="App">
   <div>
   <div className="recipePhotoBlock"></div>
      <RecipePhoto />
      <div>
         <RecipeDescription />
         <RecipeIngredients />
      </div>
   </div>
 </div>
  );
}

export default App;
