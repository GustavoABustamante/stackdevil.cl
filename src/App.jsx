import React from 'react'
import styles from './style';
import {Navbar,
  Services,
  Contact,
  Productivity,
  Us,
  Promo,
  CTA,
  GetStarted,
  Testimonials,
  Hero,
  Footer,
  Technologies} from './components'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Services/>
        <Productivity/>
        <Contact/>
        <Us/>
        <Technologies/>
        <Footer />
        </div>
      </div>
    </div>
);

export default App
