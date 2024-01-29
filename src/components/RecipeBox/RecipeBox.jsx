import styles from './RecipeBox.module.css';

const RecipeBox = ({ title, description, likes }) => {
  return (
    <article className={styles.trendingRecipeBox}>
      <header className={styles.trendingRecipeBoxHeader}>
        <h3>{title}</h3>
      </header>
      <div className={styles.recipeDescription}>
        <p>{description}</p>
        <p>{likes}</p>
      </div>
    </article>
  )
}

export default RecipeBox;