import React from 'react';
import { 
  FaUserAlt, 
  FaLinkedinIn, 
  FaHome, 
  FaTwitter, 
  FaGithub,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaInstagram,
  FaBehance,
  FaSun,
  FaMoon,
  FaBlog
} from 'react-icons/fa';
import { DiJavascript } from "react-icons/di";
import { IoMdMail, IoLogoCss3 } from 'react-icons/io';
import { BsChatFill, BsLaptopFill } from "react-icons/bs";
import Link from 'next/Link';
import Image from 'next/image';
import ProfilePic from '@images/profile_image.jpg';
import AboutPic from '@images/person-about.png';
import NotFoundPic from '@images/image-not-found.jpg';
import styles1 from '@styles/portfolio.module.scss';
import styles2 from '@styles/portfolioClare.module.scss';

function PortfolioHome() {
  const [styles, setStyles] = React.useState(styles1);
  const [theme, setTheme] = React.useState('Dark');
  const [classHome, setClassHome] = React.useState(`${styles.List} ${styles.Active}`);
  const [classAbout, setClassAbout] = React.useState(`${styles.List}`);
  const [classWorks, setClassWorks] = React.useState(`${styles.List}`);
  const [classContact, setClassContact] = React.useState(`${styles.List}`);

  function changeTheme(){
    if(theme === 'Dark'){
      setStyles(styles2)
      setTheme('light')
    }
    else if(theme === 'light'){
      setStyles(styles1)
      setTheme('Dark')
    }
  }

  function classModify(props){
    if(props.id == 'Home'){
      setClassHome(`${styles.List} ${styles.Active}`);
      setClassAbout(`${styles.List}`);
      setClassWorks(`${styles.List}`);
      setClassContact(`${styles.List}`);
    }
    else if(props.id == 'About'){
      setClassHome(`${styles.List}`);
      setClassAbout(`${styles.List} ${styles.Active}`);
      setClassWorks(`${styles.List}`);
      setClassContact(`${styles.List}`);
    }
    else if(props.id == 'Works'){
      setClassHome(`${styles.List}`);
      setClassAbout(`${styles.List}`);
      setClassWorks(`${styles.List} ${styles.Active}`);
      setClassContact(`${styles.List}`);
    }
    else if(props.id == 'Contact'){
      setClassHome(`${styles.List}`);
      setClassAbout(`${styles.List}`);
      setClassWorks(`${styles.List}`);
      setClassContact(`${styles.List} ${styles.Active}`);
    }
  }

  React.useEffect(()=>{
    let home = document.getElementById('header');
    let about = document.getElementById('about');
    let works = document.getElementById('works');
    let contact = document.getElementById('contact');

    window.onscroll = function() {
      // console.log(window.scrollY);
      // console.log(home.clientHeight);
      // console.log(about.clientHeight);
      // console.log(works.clientHeight);
      // console.log(contact.clientHeight);

      if(window.scrollY < home.clientHeight - 5) {
        setClassHome(`${styles.List} ${styles.Active}`);
        setClassAbout(`${styles.List}`);
        setClassWorks(`${styles.List}`);
        setClassContact(`${styles.List}`);
      }
      else if (
        window.scrollY >= home.clientHeight - 5
        && 
        window.scrollY < home.clientHeight + about.clientHeight - 5
        )
      {
        setClassHome(`${styles.List}`);
        setClassAbout(`${styles.List} ${styles.Active}`);
        setClassWorks(`${styles.List}`);
        setClassContact(`${styles.List}`);
      }
      else if (
        window.scrollY >= home.clientHeight + about.clientHeight - 5
        && 
        window.scrollY < home.clientHeight + about.clientHeight + works.clientHeight - 400
        )
      {
        setClassHome(`${styles.List}`);
        setClassAbout(`${styles.List}`);
        setClassWorks(`${styles.List} ${styles.Active}`);
        setClassContact(`${styles.List}`);
      }
      else if (
        window.scrollY >= home.clientHeight + about.clientHeight + works.clientHeight - 400
        && 
        window.scrollY < home.clientHeight + about.clientHeight + works.clientHeight + contact.clientHeight
        )
      {
        setClassHome(`${styles.List}`);
        setClassAbout(`${styles.List}`);
        setClassWorks(`${styles.List}`);
        setClassContact(`${styles.List} ${styles.Active}`);
      }
    }
  })
 
  

  return (
    <div className={styles.portfolioPage} id='home'>

      {/* FaSun, FaMoon */}
      <div className={styles.ChangeThemeButton} onClick={changeTheme}>
        {theme === 'Dark' 
          ? 
            <FaSun className={styles.ChangeThemeButton_icon} /> 
          : 
            <FaMoon className={styles.ChangeThemeButton_icon} />
        }
      </div>

      {/* <!-- ########## NAVBAR SECTION ########## --> */}
      <div className={styles.NavbarPortfolio}>
        <Link href='#home'>
          <a onClick={()=>classModify({id: 'Home'})} className={classHome}>
            
            <span className={styles.IconNav}>
              <FaHome />
            </span> 
            <span className={styles.TextNav}>
              Home
            </span>
          </a>
        </Link>
        <Link href='#about'>
          <a onClick={()=>classModify({id: 'About'})} className={classAbout}>
            <span className={styles.IconNav}>
              <FaUserAlt />
            </span> 
            <span className={styles.TextNav}>
              About
            </span>
          </a>
        </Link>
        <Link href='#works'>
          <a onClick={()=>classModify({id: 'Works'})} className={classWorks}>
            <span className={styles.IconNav}>
              <BsLaptopFill />
            </span> 
            <span className={styles.TextNav}>
              Works
            </span>
          </a>
          
        </Link>
        <Link href='#contact'>
          <a onClick={()=>classModify({id: 'Contact'})} className={classContact}>
            <span className={styles.IconNav}>
              <BsChatFill />
            </span> 
            <span className={styles.TextNav}>
              Contact
            </span>
          </a>
        </Link>
        <div className={styles.Indicator}></div>
      </div>

      {/* <!-- ########## HOME SECTION ########## --> */}
      <section className={styles.portfolioHeader} id='header'>
        <div className={styles.portfolioHeader_ContainerImg}>
          <Image
            src={ProfilePic}
            alt="Picture of the author"
            width={300}
            height={300}
            className={styles.portfolioHeader_Img}
            // style={{borderRadius: "50%"}}
          />
        </div>
        <div className={styles.portfolioHeader_Div}>
          {/* <p>Bienvenid@ a mi portafolio</p> */}
          <h1>{'{ Marco Agüero }'}</h1>
          <p>
            Hola, bienvenid@ a mi portafolio. Soy desarrollador web independiente especializado en Frontend con sede en Costa Rica. Mis tecnologías favoritas son React.js y Next.js
          </p>
          <div className={styles.socialLinks}>
            <Link href='https://www.linkedin.com/in/marcoa16b/'>
              <a target="_blank">
                <span>
                  <FaLinkedinIn />
                </span> 
                linkedIn
              </a>
            </Link>
            <Link href='https://twitter.com/marcofer16'>
              <a target="_blank">
                <span>
                  <FaTwitter />
                </span> 
                Twitter
              </a>
            </Link>
            <Link href='https://github.com/marcoa16b'>
              <a target="_blank">
                <span>
                  <FaGithub />
                </span> 
                Github
              </a>
            </Link>
            <Link href='mailto:marcoferab@gmail.com'>
              <a target="_blank">
                <span>
                  <IoMdMail />
                </span> 
                Gmail
              </a>
            </Link>
          </div>
          <div>
            
            <div className={styles.socialLinks}>
            <p>Visita mi Blog:</p>
              <Link href='/blog'>
                <a>
                  <span>
                    <FaBlog />
                  </span> 
                  Mi blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ########## ABOUT SECTION ########## --> */}
      <section className={styles.AboutSection} id='about'>
        <div className={styles.AboutMyself}>
          {/* <Image
            src={AboutPic}
            alt="imagen de la seccion about"
            width={400}
            height={400}
            className={styles.portfolioAbout_Img}
          /> */}
          <h2>¿Quien soy?</h2>
          <p>Soy una persona a quien le encanta mantenerse actualizado sobre tecnología, me apasiona lo que hago y me esfuerzo siempre en dar lo mejor de mi, soy responsable, respetuoso, comprometido y siempre en busca de mejora continua.</p>
        </div>
        <div className={styles.AboutSkills}>
          <h2>Lenguajes que domino</h2>
          <div className={styles.SkillsContainer}>
            <div className={styles.Skill}>
              <FaHtml5 className={styles.Icon} />
              <p>HTML5</p>
            </div>
            <div className={styles.Skill}>
              <IoLogoCss3 className={styles.Icon} />
              <p>CSS3</p>
            </div>
            <div className={styles.Skill}>
              <DiJavascript className={styles.Icon} />
              <p>JavaScript</p>
            </div>
            <div className={styles.Skill}>
              <FaReact className={styles.Icon} />
              <p>ReactJs</p>
            </div>
            <div className={styles.Skill}>
              <FaNodeJs className={styles.Icon} />
              <p>NodeJs</p>
            </div>
            <div className={styles.Skill}>
              <FaPython className={styles.Icon} />
              <p>Python</p>
            </div>
            <div className={styles.Skill}>
              <FaJava className={styles.Icon} />
              <p>Java</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ########## WORKS SECTION ########## --> */}
      <section className={styles.WorkSection} id='works'>
        <h1>Mis trabajos recientes</h1>
        <div className={styles.WorksContainer}>
          <div className={styles.WorkCard}>
            <div className={styles.WorkCard_Content}>
              <Image
                src={NotFoundPic}
                alt="imagen no encontrada"
                width={300}
                height={175}
                className={styles.CardImageWorks}
              />
              <h2>Titulo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas.</p>
              <Link href='#'>
                <a>
                  Ver proyecto
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.WorkCard}>
            <div className={styles.WorkCard_Content}>
              <Image
                src={NotFoundPic}
                alt="imagen no encontrada"
                width={300}
                height={175}
                className={styles.CardImageWorks}
              />
              <h2>Titulo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas.</p>
              <Link href='#'>
                <a>
                  Ver proyecto
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.WorkCard}>
            <div className={styles.WorkCard_Content}>
              <Image
                src={NotFoundPic}
                alt="imagen no encontrada"
                width={300}
                height={175}
                className={styles.CardImageWorks}
              />
              <h2>Titulo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas.</p>
              <Link href='#'>
                <a>
                  Ver proyecto
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ########## CONTACT SECTION ########## --> */}
      <section className={styles.ContactSection} id='contact'>
        <h1>Contactame</h1>
        <p>Escribeme por cualquiera de los siguientes medios</p>
        <div className={styles.ContactLinks}>
          <Link href='https://www.linkedin.com/in/marcoa16b/'>
            <a target="_blank">
              <span><FaLinkedinIn /></span> 
              linkedIn
            </a>
          </Link>
          <Link href='https://twitter.com/marcofer16'>
            <a target="_blank">
              <span><FaTwitter /></span> 
              Twitter
            </a>
          </Link>
          <Link href='mailto:marcoferab@gmail.com'>
            <a target="_blank">
              <span><IoMdMail /></span> 
              Gmail
            </a>
          </Link>
        </div>
        <p>Sigueme en mis redes sociales</p>
        <div className={styles.ContactLinks}>
          <Link href='https://www.instagram.com/marco_a16b/'>
            <a target="_blank">
              <span><FaInstagram /></span> 
              Instagram
            </a>
          </Link>
          <Link href='https://github.com/marcoa16b'>
            <a target="_blank">
              <span><FaGithub /></span> 
              Github
            </a>
          </Link>
          <Link href='https://www.behance.net/marcoagero1'>
            <a target="_blank">
              <span><FaBehance /></span> 
              Behance
            </a>
          </Link>
        </div>
      </section>

      <footer className={styles.Footer}>
        <p>© 2022 - Marco Agüero</p>
      </footer>
    </div>
  );
}

export default PortfolioHome;