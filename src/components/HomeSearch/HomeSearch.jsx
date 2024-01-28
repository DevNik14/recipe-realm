import styles from './HomeSearch.module.css'

const HomeSearch = () => {
  return (
    <div className={`${styles.homeSearch} maxWdithContainer`}>
      <form className={styles.homeSearchForm}>
        <input type="text" placeholder="Search for a specific recipes" />
        <input type="button" value="Search"/>
      </form>
    </div>
  )
}

export default HomeSearch;