import React from 'react'
import styles from './midbox.module.css'; 
const Midbox = () => {
  return (
    <div>
        <div>
          <ul className={styles.midbox1}>
            <li>THE ULITMATE SALE  <img src="/nikewhitelogo.png" className={styles.nikelogo}></img></li>
            <li>CODE: ULITMATE <img src="/nikewhitelogo.png" className={styles.nikelogo}></img></li>
            <li>THE ULITMATE SALE  <img src="/nikewhitelogo.png" className={styles.nikelogo}></img></li>
            <li>CODE: ULITMATE  <img src="/nikewhitelogo.png" className={styles.nikelogo}></img></li>
            <li>THE ULITMATE SALE  <img src="/nikewhitelogo.png" className={styles.nikelogo}></img></li>
            <li>CODE: ULITMATE <img src="/nikewhitelogo.png" className={styles.nikelogo}></img></li>
            <li>THE ULITMATE SALE  <img src="/nikewhitelogo.png" className={styles.nikelogo}></img></li>
            
          </ul>
        </div>
        <ul className={styles.midbox2}>
       
            <li><img src="/shoe2.webp" className={styles.nikeshoes1}></img></li>
            <li><img src="/shoe1.webp" className={styles.nikeshoes1}></img></li>
            
            <li ><img src="/shoe3.webp" className={styles.nikeshoes1}></img></li>
        </ul>
        <div>
          <ul className={styles.midboxtext}>
            <li><h1 className={styles.textheading}>SAVE UPTO 60%</h1></li>
            <li className={styles.text}> Use code ultimate at checkout to save 20% on select styles <br />online and in select nike stores.Exclusion apply.   </li>
            <li><button className={styles.shopbtn}>shop</button></li>
          </ul>
        </div>


    </div>
  )
}

export default Midbox