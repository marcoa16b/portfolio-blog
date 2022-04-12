import React from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import Navbar from 'components/blog/Navbar';
import { ThemeContext } from '@myProvider/themeProvider';
// imports de Imagenes
import NewsPic from '@images/main-news-img.png';
import Example1Pic from '@images/post-1.png';
import Example2Pic from '@images/post-2.png';
import Example3Pic from '@images/post-3.png';
// Imports de Styles
import styles from '@styles/blogStyles/blog.module.scss';


const MyBlog = () => {

  const {
    theme,
    ToggleTheme,
    themeClass 
  } = React.useContext(ThemeContext);

  const [darkMode, setDarkMode] = React.useState(true);
  const [themeStyle, setThemeStyle] = React.useState(styles.Dark);
  //let myTheme = theme;

  function ChangeThemeMode() {
    if(darkMode === true){
      setDarkMode(false)
      setThemeStyle(styles.Clare)
    }
    else if(darkMode === false){
      setDarkMode(true)
      setThemeStyle(styles.Dark)
    }
  }


  return (
    <main>
      <Navbar  
        darkMode={darkMode}
        ChangeThemeMode={ChangeThemeMode}
      />
      <div className={`${themeStyle} ${styles.BlogsMain}`}>
        {/* <!-- ########## NEWS ########## --> */}
        <section className={` ${styles.BlogsNewsContainer}`} id='news'>
          <div className={styles.BlogsMainNew}>
            <h3>Ultima noticia!</h3>
            <div className={styles.BlogNewsImg}>
              {/* <img src="./assets/img/main-news-img.png" alt=""> */}
              <Image
                src={NewsPic}
                alt="Picture of the author"
                width={300}
                height={200}
                layout="responsive"
                priority="true"
                className={styles.portfolioHeader_Img}
                // style={{borderRadius: "50%"}}
              />
            </div>
            <div className={styles.BlogNewsInfo}>
              <div className={styles.BlogNewsInfo_Texts}>
                <h2>Titulo del blogpost</h2>
                <div className={styles.MiniDivider}></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ab facilis. Nostrum error quaerat, necessitatibus quis sint ipsa nesciunt dolorum velit optio cum repellat.</p>
              </div>
              {/* <a href="#" className={styles.BlogButton}>Leer más</a> */}
              <div onClick={ChangeThemeMode} className={styles.BlogButton}>
                <Link href='#'>
                  <a>
                    {/* <span>
                      <FaBlog />
                    </span>  */}
                   Leer más
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ########## POSTS ########## --> */}
        <section className={` ${styles.BlogPostsContainer}`} id='posts'>
          <h3>Ultimos posts</h3>
          <div className={styles.Divider}></div>
          <div className={styles.GridPostsContainer}>
            <article className={styles.PostContainer}>
              {/* <img src="./assets/img/post-1.png" alt=""> */}
              <Image
                src={Example1Pic}
                alt="Picture of the author"
                width={300}
                height={200}
                className={styles.PostImage}
                // style={{borderRadius: "50%"}}
              />
              <p>Titulo del blog post</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusantium molestiae ipsa veritatis? Commodi nesciunt labore enim nulla iure ut delectus asperiores.</p>
              {/* <a href="blog.html" className="blogs_button">Leer más</a> */}
              <div className={styles.BlogButton}>
                <Link href='#'>
                  <a>
                    {/* <span>
                      <FaBlog />
                    </span>  */}
                    Leer más
                  </a>
                </Link>
              </div>
            </article>
            <article className={styles.PostContainer}>
              {/* <img src="./assets/img/post-2.png" alt=""> */}
              <Image
                src={Example2Pic}
                alt="Picture of the author"
                width={300}
                height={200}
                className={styles.PostImage}
                // style={{borderRadius: "50%"}}
              />
              <p>Titulo del blog post</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusantium molestiae ipsa veritatis? Commodi nesciunt labore enim nulla iure ut delectus asperiores.</p>
              {/* <a href="blog.html" className="blogs_button">Leer más</a> */}
              <div className={styles.BlogButton}>
                <Link href='#'>
                  <a target="_blank">
                    {/* <span>
                      <FaBlog />
                    </span>  */}
                    Leer más
                  </a>
                </Link>
              </div>
            </article>
            <article className={styles.PostContainer}>
              {/* <img src="./assets/img/post-3.png" alt=""> */}
              <Image
                src={Example3Pic}
                alt="Picture of the author"
                width={300}
                height={200}
                className={styles.PostImage}
                // style={{borderRadius: "50%"}}
              />
              <p>Titulo del blog post</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusantium molestiae ipsa veritatis? Commodi nesciunt labore enim nulla iure ut delectus asperiores.</p>
              {/* <a href="blog.html" className="blogs_button">Leer más</a> */}
              <div className={styles.BlogButton}>
                <Link href='#'>
                  <a target="_blank">
                    {/* <span>
                      <FaBlog />
                    </span>  */}
                    Leer más
                  </a>
                </Link>
              </div>
            </article>
            <article className={styles.PostContainer}>
              {/* <img src="./assets/img/post-1.png" alt=""> */}
              <Image
                src={Example1Pic}
                alt="Picture of the author"
                width={300}
                height={200}
                className={styles.PostImage}
                // style={{borderRadius: "50%"}}
              />
              <p>Titulo del blog post</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusantium molestiae ipsa veritatis? Commodi nesciunt labore enim nulla iure ut delectus asperiores.</p>
              {/* <a href="blog.html" className="blogs_button">Leer más</a> */}
              <div className={styles.BlogButton}>
                <Link href='#'>
                  <a target="_blank">
                    {/* <span>
                      <FaBlog />
                    </span>  */}
                    Leer más
                  </a>
                </Link>
              </div>
            </article>
            <article className={styles.PostContainer}>
              {/* <img src="./assets/img/post-2.png" alt=""> */}
              <Image
                src={Example2Pic}
                alt="Picture of the author"
                width={300}
                height={200}
                className={styles.PostImage}
                // style={{borderRadius: "50%"}}
              />
              <p>Titulo del blog post</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusantium molestiae ipsa veritatis? Commodi nesciunt labore enim nulla iure ut delectus asperiores.</p>
              {/* <a href="blog.html" className="blogs_button">Leer más</a> */}
              <div className={styles.BlogButton}>
                <Link href='#'>
                  <a target="_blank">
                    {/* <span>
                      <FaBlog />
                    </span>  */}
                    Leer más
                  </a>
                </Link>
              </div>
            </article>
            <article className={styles.PostContainer}>
              {/* <img src="./assets/img/post-3.png" alt=""> */}
              <Image
                src={Example3Pic}
                alt="Picture of the author"
                width={300}
                height={200}
                className={styles.PostImage}
                // style={{borderRadius: "50%"}}
              />
              <p>Titulo del blog post</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusantium molestiae ipsa veritatis? Commodi nesciunt labore enim nulla iure ut delectus asperiores.</p>
              {/* <a href="blog.html" className="blogs_button">Leer más</a> */}
              <div className={styles.BlogButton}>
                <Link href='#'>
                  <a target="_blank">
                    {/* <span>
                      <FaBlog />
                    </span>  */}
                    Leer más
                  </a>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <div className={styles.footer}>
          <p>Creado por Marco Agüero. 2022</p>
        </div>
      </div>
      
    </main>
  );
};

export default MyBlog;