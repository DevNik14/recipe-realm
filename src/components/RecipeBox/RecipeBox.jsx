import styles from './RecipeBox.module.css';

const RecipeBox = ({ title, description, likes, img }) => {
  return (
    <article className={styles.trendingRecipeBox}>
      <div className={styles.recipeContent}>
        <h3>{title}</h3>
        <img src={img} alt="img" />
        <p>{description}</p>
        <p>likes: {likes}</p>
      </div>
    </article>
  )
}

export default RecipeBox;