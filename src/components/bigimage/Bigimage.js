import React from 'react'
import styles from './bigimage.module.css'; 

const Bigimage = () => {
  return (
    <div>
        <p><img src="/bigimage.jpg" className={styles.Bigimage}></img></p>

        <ul className={styles.Bigimagetext}>
            <li><h1 className={styles.texthead}>NEW ARRIVALS</h1></li>
            <li>Featuring the Air Force 1 Pro Tech</li>
            <li><button className={styles.bigimgebtn}>Shop</button></li>
        </ul>
    </div>
  )
}

export default Bigimage