const TrendingRecipes = () => {
  return (
    <section className="trending-recipes-home-section">
      <div className="trending-recipes-content">
        <h2>Trending Recipes</h2>
        <div className="trending-recipes-boxes">
          <artcile className="trending-recipe-box">
            <header className="trending-recipe-box-header">
              <h3>Recipe Header</h3>
            </header>
            <div className="recipe-description">
              <p>Some fancy recipe description</p>
            </div>
          </artcile>
          <artcile className="trending-recipe-box">
            <header className="trending-recipe-box-header">
              <h3>Recipe Header</h3>
            </header>
            <div className="recipe-description">
              <p>Some fancy recipe description</p>
            </div>
          </artcile>
          <artcile className="trending-recipe-box">
            <header className="trending-recipe-box-header">
              <h3>Recipe Header</h3>
            </header>
            <div className="recipe-description">
              <p>Some fancy recipe description</p>
            </div>
          </artcile>
        </div>
      </div>
    </section>
  )
}

export default TrendingRecipes;