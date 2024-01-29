import RecipeBox from "../RecipeBox/RecipeBox";
import styles from './TrendingRecipes.module.css';

const recipes = [
  { title: "Recipe Title", description: "Some fancy recipe description", likes: 14 },
  { title: "Recipe Title", description: "Some fancy recipe description", likes: 14 },
  { title: "Recipe Title", description: "Some fancy recipe description", likes: 14 }
]

const TrendingRecipes = () => {
  return (
    <section className={`${styles.trendingRecipesHomeSection} maxWdithContainer`}>
      <div className={styles.trendingRecipesContent}>
        <h2>Trending Recipes</h2>
        {
          recipes.length > 0 &&
          <div className={styles.trendingRecipesBoxes}>
            {recipes.map((recipe, i) => {
              return <RecipeBox key={`${recipe.title} ${i}`} {...recipe} />
            })}
          </div>
        }

      </div>
    </section>
  )
}

export default TrendingRecipes;