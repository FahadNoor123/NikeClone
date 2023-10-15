import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerLinks}>
                    <ul>
                        <li><a href="#">GIFT CARDS</a></li>
                        <li><a href="#">PROMOTIONS</a></li>
                        <li><a href="#">FIND A STORE</a></li>
                        <li><a href="#">BECOME A MEMBER</a></li>
                        <li><a href="#">NIKE JOURNAL</a></li>
                        <li><a href="#">SEND US FEEDBACK</a></li>
                        <li><a href="#">GET HELP</a></li>
                    </ul>
                </div>
                <div className={styles.footerIcons}>
                    <ul className={styles.flexy}>
                        <li ><img src="/footer/twitter.png" className={styles.fabfatwitter} ></img><a href="#"> <i></i></a></li>
                        <li> <img src="/footer/facebook.png" className={styles.fabfafacebook}></img> <a href="#"><i ></i></a></li>
                        
                        <li><a href="#"><i className={styles.fabfainstagram}></i></a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <p>© 2023 Nike, Inc. All Rights Reserved</p>
                <ul>
                    <li><a href="#">Guides</a></li>
                    <li><a href="#">Terms of Sale</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Nike Privacy Policy</a></li>
                    <li><a href="#">Your Privacy Choices</a></li>
                    <li><a href="#">CA Supply Chains Act</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
