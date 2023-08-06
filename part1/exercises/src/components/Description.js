import styles from './Description.module.css';
import React from 'react';
export default function RecipeAuthor() {
    let authorlink = "https://www.recipetineats.com/vietnamese-pho-recipe/";
    let authorphoto = "https://www.recipetineats.com/wp-content/uploads/2018/12/nagi.jpg?resize=125,125";
    let authorName = "Nagi"
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