import styles from './Hero.module.css'

const Hero = () => {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Discover, Share, and Enjoy Delicious Recipes</h1>
        <p>Welcome to Recipe Realm, your go-to destination for culinary inspiration and delightful recipes.</p>
        <p>Explore a world of flavors, connect with fellow food enthusiasts, and make every meal a memorable experience.</p>
        <div className={styles.heroCtaButtons}>
          <button>Get Started</button>
          <button>Explore Recipes</button>
        </div>
      </div>
    </header>
  )
}

export default Hero;