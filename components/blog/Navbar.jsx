import React from 'react';
import Link from 'next/Link';
import { 
  FaLinkedinIn,
  FaTwitter, 
  FaGithub,
  FaBlog,
  FaSun,
  FaMoon,
 } from 'react-icons/fa';
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import styles from '@styles/blogStyles/navbar.module.scss';


const Navbar = (props) => {

  let darkMode = props.darkMode;
  const ChangeThemeMode = props.ChangeThemeMode;

  const [classNav, setClassNav] = React.useState(`${styles.NavMobileContainer}`);
  const [isMobile, setIsMobile] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  // const [themeStyle, setThemeStyle] = React.useState(styles.Dark);

  function setMenuState() {
    if(menuOpen === true) {
      setMenuOpen(false)
      setClassNav(`${styles.NavMobileContainer}`)
    }
    else {
      setMenuOpen(true)
      setClassNav(`${styles.NavMobileContainer} ${styles.NavMobileActive}`)
    }
  }

  React.useEffect(() => {
    var windowWidth = window.innerWidth;
    if (windowWidth < 460) {
      setIsMobile(true)
    }else {
      setIsMobile(false)
    }
    window.onscroll = function() {
      if (windowWidth < 460) {
        setIsMobile(true)
      }else {
        setIsMobile(false)
      }
    }
  })

  // function toggleTheme(){
  //   ChangeThemeMode();
  //   if(darkMode === true){
  //     setThemeStyle(styles.Clare)
  //   }
  //   else if(darkMode === false){
  //     setThemeStyle(styles.Dark)
  //   }
  // }

  return (
    <nav className={`${styles.Navbar}`}>
      <section className={styles.NavSocialContainer}>
        <div className={styles.IconSocial}>
          <FaLinkedinIn />
        </div>
        <div className={styles.IconSocial}>
          <FaTwitter />
        </div>
        <div className={styles.IconSocial}>
          <FaGithub />
        </div>
      </section>
      <section className={styles.NavLogoContainer}>
        <div className={styles.MyLogo}>
          <Link href='/blog'>
            <a>
              <span>
                <FaBlog />
              </span>
              Mi blog
            </a>
          </Link>
        </div>
      </section>
      {
        isMobile ?
          <section className={styles.NavLinksMobile}>
            <div className={styles.IconNav}>
              {menuOpen ?
                <CgCloseO 
                  onClick={setMenuState}
                /> 
              : 
                <CgMenuRound 
                  onClick={setMenuState}
                />
              }
              <section className={classNav}>
                {/* posible espacio del div  */}
                <div className={styles.NavLink}>
                  <Link href='#'>
                    <a onClick={setMenuState}>
                      Home
                    </a>
                  </Link>
                </div>
                <div className={styles.NavLink}>
                  <Link href='#'>
                    <a onClick={setMenuState}>
                      Sobre mí
                    </a>
                  </Link>
                </div>
                <div onClick={ChangeThemeMode} className={styles.IconSocial}>
                  {darkMode?<FaSun />:<FaMoon />}
                </div>
              </section>
            </div>
          </section>
          
        :
          <section className={styles.NavLinksContainer}>
            <div className={styles.NavLink}>
              <Link href='#'>
                <a>
                  Home
                </a>
              </Link>
            </div>
            <div className={styles.NavLink}>
              <Link href='#'>
                <a>
                  Sobre mí
                </a>
              </Link>
            </div>
            <div onClick={ChangeThemeMode} className={styles.IconSocial}>
              {darkMode?<FaSun />:<FaMoon />}
            </div>
          </section>
      }
      
    </nav>
  );
};

export default Navbar;