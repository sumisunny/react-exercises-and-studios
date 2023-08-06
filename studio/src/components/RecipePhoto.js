import React from 'react';
import styles from './Description.module.css';

const RecipePhoto = () => {
  
  const photoURL = 'https://myfoodstory.com/wp-content/uploads/2023/04/ip-butter-chicken-3.jpg';

  return (
    <img src={photoURL} alt="RecipePhoto" className={styles.imageUpdates} />
  );
};

export default RecipePhoto;

