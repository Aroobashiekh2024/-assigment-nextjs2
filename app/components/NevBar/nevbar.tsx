import Link from "next/link";
import React from "react";
import styles from './navbar.module.css'
 function Navbar(){
return(
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <ul className={styles.navlink}>
                <li>
                    <Link href="/" className={styles.link}>home</Link>
                </li>
                <li>
                    <Link href="/about" className={styles.link}>about</Link>
                </li>
                <li>
                    <Link href="/contact" className={styles.link}>contact</Link>
                </li>
                <li>
                    <Link href="/service" className={styles.link}>service</Link>
                </li>
            </ul>
        </div>
    </nav>
)
};
export default Navbar ;