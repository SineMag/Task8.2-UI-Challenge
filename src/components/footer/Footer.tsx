import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <a href="/" className={styles.footerLogo}>INSURE</a>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook">
              <span className={styles.socialIcon}>FB</span>
            </a>
            <a href="#" aria-label="Twitter">
              <span className={styles.socialIcon}>TW</span>
            </a>
            <a href="#" aria-label="Pinterest">
              <span className={styles.socialIcon}>PT</span>
            </a>
            <a href="#" aria-label="Instagram">
              <span className={styles.socialIcon}>IG</span>
            </a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerColumn}>
            <h4>OUR COMPANY</h4>
            <ul>
              <li><a href="#how-we-work">HOW WE WORK</a></li>
              <li><a href="#why-insure">WHY INSURE?</a></li>
              <li><a href="#view-plans">VIEW PLANS</a></li>
              <li><a href="#reviews">REVIEWS</a></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h4>HELP ME</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#terms">TERMS OF USE</a></li>
              <li><a href="#privacy">PRIVACY POLICY</a></li>
              <li><a href="#cookies">COOKIES</a></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h4>CONTACT</h4>
            <ul>
              <li><a href="#sales">SALES</a></li>
              <li><a href="#support">SUPPORT</a></li>
              <li><a href="#live-chat">LIVE CHAT</a></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h4>OTHERS</h4>
            <ul>
              <li><a href="#careers">CAREERS</a></li>
              <li><a href="#press">PRESS</a></li>
              <li><a href="#licenses">LICENSES</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer