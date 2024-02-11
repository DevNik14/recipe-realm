import RecipeBox from "../RecipeBox/RecipeBox";
import styles from './TrendingRecipes.module.css';



const TrendingRecipes = () => {
  const recipes = [
    { id: 1, title: "Recipe Title 1", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { id: 2, title: "Recipe Title 2", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { id: 3, title: "Recipe Title 3", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { id: 4, title: "Recipe Title 4", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" }
  ]

  return (
    <section className={`${styles.trendingRecipesHomeSection} justify-content-center`}>
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