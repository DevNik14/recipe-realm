import styles from './RecipeBox.module.css';

const RecipeBox = ({ title, description, likes, img }) => {
  return (
    <article className={styles.trendingRecipeBox}>
      <header className={styles.trendingRecipeBoxHeader}>
        <h3>{title}</h3>
      </header>
      <div className={styles.recipeDescription}>
        <img src={img} alt="img" />
        <p>{description}</p>
        <p>likes: {likes}</p>
      </div>
    </article>
  )
}

export default RecipeBox;