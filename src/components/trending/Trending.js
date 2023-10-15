import React from 'react'
import styles from './trending.module.css'; 
const Trending = () => {
  return (
    <div>
      
        {/* <ul className={styles.trendings}>
            <li ><span className={styles.trendingtexts}>Trending</span><img src="/trending/capture1.jpg"></img> Kicks. Essential &More</li>
            <li><img src="/trending/capture2.jpg"></img>Nike Style</li>
            <li><img src="/trending/capture3.jpg"></img>HBCU versity Collection</li>
        </ul> */}





<ul className={styles.trendings}>
        <li>
          <div className="card" style={{ width: '30rem' }} id={styles.carde}>
            <img src="/trending/capture1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Kicks. Essential &More</p>
            </div>
          </div>
        </li>
        <li>
        <div className="card" style={{ width: '30rem' }} id={styles.carde}>
            <img src="/trending/capture2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Nike Style</p>
            </div>
          </div>
        </li>
        <li>
        <div className="card" style={{ width: '30rem' }} id={styles.carde}>
            <img src="/trending/capture3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">HBCU versity Collection</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Trending