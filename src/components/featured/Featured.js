import React from 'react'
import styles from './featured.module.css';
const Featured = () => {
  return (
    <div>
        <ul className={styles.featuredsss}>
            <li>
                <img src="/featured/featured1.png"></img> 
                <ul className={styles.featuredee}> 
                <li>Nen from Jordan Baskeballs</li>
                <li className={styles.featuredeetext}>Featuring the Aion 3</li>
                <li><button className={styles.bigimgebtn}>Shop</button></li>
                </ul>
            </li>
            <li>
                <img src="/featured/featured3.png"></img>
                <ul className={styles.featuredee}>
                <li className={styles.featuredimage2}>Rep your school</li>
                <li className={styles.featuredimage2}> Dunk Madness</li>
                <li><button className={styles.bigimgebtn2}>Shop</button></li>
                </ul>
                </li>
        </ul>
    </div>
  )
}

export default Featured