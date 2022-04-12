import React from 'react';
import { FaUserAlt, FaLinkedinIn, FaHome, FaLaptop } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/Link';

import styles from '@styles/navportfolio.modules.scss';

const NavbarPortfolio = () => {

  // var list = () => {
  //   if(typeof window === 'undefined'){
  //     document.querySelectorAll(`.${styles.List}`);
  //   }
  // }
  // function activeLink(){
  //   list.forEach((item) => 
  //   item.classList.remove(`${styles.Active}`));
  //   this.classList.add(`${styles.Active}`);
  // }
  // list.forEach((item) => 
  // item.addEventListener('click', activeLink));

  return (
    <div>
      <div className={styles.NavbarPortfolio}>
          <Link href='#'>
            <a className={styles.List}>
              <div className={styles.Indicator}></div>
              <span className={styles.IconNav}>
                <FaHome />
              </span> 
              <span className={styles.TextNav}>
                Home
              </span>
            </a>
          </Link>
          <Link href='#'>
            <a className={styles.List}>
              <span className={styles.IconNav}>
                <FaUserAlt />
              </span> 
              <span className={styles.TextNav}>
                About
              </span>
            </a>
          </Link>
          <Link href='#'>
            <a className={styles.List}>
              <span className={styles.IconNav}>
                <FaLaptop />
              </span> 
              <span className={styles.TextNav}>
                Works
              </span>
            </a>
            
          </Link>
          <Link href='#'>
            <a className={styles.List}>
              <span className={styles.IconNav}>
                <IoMdMail />
              </span> 
              <span className={styles.TextNav}>
                Contact
              </span>
            </a>
          </Link>
        </div>
    </div>
  );
};

export default NavbarPortfolio;