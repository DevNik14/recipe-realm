const HomeSearch = () => {
  return (
    <div className="home-search">
      <form className="home-seatch-form">
        <input type="text" placeholder="Search for a specific recipes" />
        <input type="button" value="Search"/>
      </form>
    </div>
  )
}

export default HomeSearch;