import React from 'react'
import styles from './Features.module.css'

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Snappy Process",
      description: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."
    },
    {
      id: 2,
      title: "Affordable Prices",
      description: "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
    },
    {
      id: 3,
      title: "People First",
      description: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
    }
  ]

  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>We're different</h2>
        
        <div className={styles.featuresGrid}>
          {features.map(feature => (
            <div key={feature.id} className={styles.feature}>
              <div className={styles.featureIcon}>
                {/* Icon would go here */}
                <div className={styles.iconPlaceholder}>{feature.id}</div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Find out more about how we work</h2>
            <a href="#how-we-work" className={`btn ${styles.ctaBtn}`}>HOW WE WORK</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features