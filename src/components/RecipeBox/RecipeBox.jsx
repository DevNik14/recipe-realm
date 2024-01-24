const RecipeBox = ({ title, description, likes }) => {
  return (
    <article className="trending-recipe-box">
      <header className="trending-recipe-box-header">
        <h3>{title}</h3>
      </header>
      <div className="recipe-description">
        <p>{description}</p>
        <p>{likes}</p>
      </div>
    </article>
  )
}

export default RecipeBox;