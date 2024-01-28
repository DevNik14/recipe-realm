import RecipeBox from "../RecipeBox/RecipeBox";

const recipes = [
  { title: "Recipe Title", description: "Some fancy recipe description", likes: 14 },
  { title: "Recipe Title", description: "Some fancy recipe description", likes: 14 },
  { title: "Recipe Title", description: "Some fancy recipe description", likes: 14 }
]

const TrendingRecipes = () => {
  return (
    <section className="trending-recipes-home-section maxWdithContainer">
      <div className="trending-recipes-content">
        <h2>Trending Recipes</h2>
        {
          recipes.length > 0 &&
          <div className="trending-recipes-boxes">
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