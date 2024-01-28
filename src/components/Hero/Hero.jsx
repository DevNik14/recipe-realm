import styles from './Hero.module.css'

const Hero = () => {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div>
          <h1>Discover, Share, and Enjoy Delicious Recipes</h1>
        </div>
        <div>
          <p>Welcome to Recipe Realm, your go-to destination for culinary inspiration and delightful recipes.
            Explore a world of flavors, connect with fellow food enthusiasts, and make every meal a memorable experience.
          </p>
        </div>
        <div className={styles.heroCtaButtons}>
          <button>Explore Recipes</button>
        </div>
      </div>
    </header>
  )
}

export default Hero;