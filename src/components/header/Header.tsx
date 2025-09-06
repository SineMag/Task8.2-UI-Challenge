import React, { useState } from 'react'
import styles from './Header.module.css'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="/" className={styles.logo}>INSURE</a>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navMenu}>
            <li><a href="#how-we-work">HOW WE WORK</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#account">ACCOUNT</a></li>
            <li><a href="#view-plans" className={styles.viewPlansBtn}>VIEW PLANS</a></li>
          </ul>
        </nav>

        <button 
          className={styles.mobileMenuBtn} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header