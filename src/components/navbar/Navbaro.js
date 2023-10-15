import React from 'react'
import styles from './Navbaro.module.css'; 

const Navbarr = () => {
  return (
    <div>
        <ul className={styles.parent}>
            <li className={styles.child}>Nike Refurbished</li>
            <li className={styles.child}>|</li>
            <li className={styles.child}>Find a store</li>
            <li className={styles.child}>|</li>
            <li className={styles.child}>Help</li>
            <li className={styles.child}>|</li>
            <li className={styles.child}>join Us</li>
            <li className={styles.child}>|</li>
            <li className={styles.child}>Sin in</li>


        </ul>

    </div>
  )
}

export default Navbarr
