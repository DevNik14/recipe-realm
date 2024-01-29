const RecipeBox = ({ title, description, likes }) => {
  return (
    <article className="trendingRecipeBox">
      <header className="trendingRecipeBoxHeader">
        <h3>{title}</h3>
      </header>
      <div className="recipeDescription">
        <p>{description}</p>
        <p>{likes}</p>
      </div>
    </article>
  )
}

export default RecipeBox;