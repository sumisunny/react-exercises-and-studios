import React from 'react';
import styles from './Description.module.css';

class RecipeDescription extends React.Component {
    render () {
        return (
            <div> 
      <div>
         <h1>Recipe Title</h1>
         <p>Chicken Tikka Masala</p>
      </div>
      <RecipeAuthor />
   </div>
        );
     }
    }


 function RecipeAuthor() {
    let authorLink = "https://myfoodstory.com/instant-pot-chicken-tikka-masala/";
    let authorPhoto = "https://myfoodstory.com/wp-content/uploads/2021/09/mobile-top-banner-edited-300x300.jpg";
    let authorName = "Richa"
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

export default RecipeDescription;