const Intro = () => {
  return (
    <div className="intro">
      <figure className="bg">
        <img src="images/intro.jpg" alt="" />
      </figure>
      {/*wrap*/}
      <div className="wrap clearfix">
        {/*row*/}
        <div className="row">
          <article className="three-fourth text">
            <h1>Welcome to SocialChef!</h1>
            <p>
              SocialChef is the ultimate <strong>cooking social community</strong>,
              where recipes come to life. Wanna know what you will gain by joining
              us? Lorem ipsum dolor sit amet, this is some teaser text.
            </p>
            <p>
              You will win awesome prizes, make new friends and share delicious
              recipes.{" "}
            </p>
            <a href="register.html" className="button white more medium">
              Join our community <i className="fa fa-chevron-right" />
            </a>
            <p>
              Already a member? Click <a href="login.html">here</a> to login.
            </p>
          </article>
          {/*search recipes widget*/}
          <div className="one-fourth">
            <div className="widget container">
              <div className="textwrap">
                <h3>Search for recipes</h3>
                <p>
                  All you need to do is enter an igredient, a dish or a keyword.{" "}
                </p>
                <p>You can also select a specific category from the dropdown.</p>
                <p>There’s sure to be something tempting for you to try.</p>
                <p>Enjoy!</p>
              </div>
              <form action="find_recipe.html">
                <div className="f-row">
                  <input type="text" placeholder="Enter your search term" />
                </div>
                <div className="f-row">
                  <select>
                    <option>or select a category</option>
                    <option>Apetizers</option>
                    <option>Cocktails</option>
                    <option>Deserts</option>
                    <option>Main courses</option>
                    <option>Snacks</option>
                    <option>Soups</option>
                  </select>
                </div>
                <div className="f-row bwrap">
                  <input type="submit" defaultValue="Start cooking!" />
                </div>
              </form>
            </div>
          </div>
          {/*//search recipes widget*/}
        </div>
        {/*//row*/}
      </div>
      {/*//wrap*/}
    </div>
  )
}

export default Intro;