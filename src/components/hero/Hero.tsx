import React from 'react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our expertise
            and technology to help you find the plan that's right for you. Ensure you
            and your loved ones are protected.
          </p>
          <a href="#view-plans" className={`btn ${styles.heroBtn}`}>VIEW PLANS</a>
        </div>
        <div className={styles.heroImage}>
          {/* This would be replaced with an actual image */}
          <div className={styles.placeholderImage}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero