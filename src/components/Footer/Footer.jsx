import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.homeFooter} footer maxWdithContainer`}>
      <a href="https://github.com/DevNik14" target="_blank">Designed and Developed by Nikolay Kyurchiyski</a>
    </footer>
  )
}

export default Footer;