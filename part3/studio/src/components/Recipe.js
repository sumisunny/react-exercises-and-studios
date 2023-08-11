const RecipeAuthor = () => {
   let authorLink = "https://www.thechunkychef.com/family-favorite-baked-mac-and-cheese/";
   let authorPhoto = "https://www.thechunkychef.com/wp-content/uploads/2021/02/sidebar-440x259.jpg";
   let authorName = "The Chunky Chef";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = {
      driedPasta: "16 oz dried pasta",
      cheeseSauce: "2 cups cheese sauce",
      butter: "1/4 cup butter",
      flour: "1/4 cup all-purpose flour",
      milk: "2 cups milk",
   };

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients.driedPasta}</li>
            <li>{ingredients.cheeseSauce}</li>
            <li>{ingredients.butter}</li>
            <li>{ingredients.flour}</li>
            <li>{ingredients.milk}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Ultimate Creamy Baked Mac and Cheese</h1>
            <p>A classic and delicious comfort food that's perfect for any occasion.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}


const RecipePhoto = () => {
   return (
      <img src="https://www.thechunkychef.com/wp-content/uploads/2018/02/Ultimate-Creamy-Baked-Mac-and-Cheese-baking-dish-768x1083.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}