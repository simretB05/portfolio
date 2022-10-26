import React, { useState} from "react";
import Hero from "../Hero/hero";
import classes from "../Home/Home.module.scss"
import Logo from "../images/logo.jpg";
import LogoDark from "../images/logoDark.jpg";
import { useTheme, useThemeUpdate } from "../ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';





function Home() {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };
    const isDarkTheme = useTheme();
    const onThemeDark = useThemeUpdate();

  return (
      <>
          
            <header className={ isDarkTheme ?  classes.header__dark :classes.header}>
        
                <div className={isDarkTheme ?  classes.header__dark__toggle :classes.header__toggle}>
        
                    <button className={ isDarkTheme ?classes.header__dark__toggle__btn :classes.header__toggle__btn} onClick={menuToggleHandler} aria-label="Open menu">
                        <div className={menuOpen && isDarkTheme ? classes.header__dark__toggle__btn__open :!menuOpen && isDarkTheme ? classes.header__dark__toggle__btn__burger :menuOpen && !isDarkTheme ? classes.header__toggle__btn__open:classes.header__toggle__btn__burger}   ></div>
                  </button>
                  {/* <div  className={ isDarkTheme ? classes.header__theme__toggle :classes.header__theme__container }aria-label="dark mode btton">
                      <button onClick={onThemeDark}
                          
                      className={ isDarkTheme ? classes.header__theme__toggle__btn :classes.header__theme__container__btn} 
                   
                  />
                  </div> */}
                      <input type="checkbox" className={isDarkTheme ? classes.header__theme__toggle__dark:classes.header__theme__toggle }aria-label="dark mode btton" />
                      <label  onClick={onThemeDark}className={isDarkTheme ? classes.header__theme__toggle__dark__lable :classes.header__theme__toggle__lable} for="darkmode-toggle">
                          <FontAwesomeIcon className={isDarkTheme ? classes.FontAwesomeIconSun__dark:classes.FontAwesomeIconSun}  icon={faSun}  />
                           <FontAwesomeIcon className={isDarkTheme ? classes.FontAwesomeIconMoon__dark:classes.FontAwesomeIconMoon} icon={faMoon} />                     
                        </label> 
                
                    <a className={classes.header__toggle__home__link} href="#home">
                        <img className={ classes.header__toggle__logo} src={ isDarkTheme ? LogoDark :Logo} alt="log img"/>
                    </a>
                </div>
                <nav className={isDarkTheme ? classes.nav__dark :classes.nav}>
                    <ul className= {menuOpen && isDarkTheme ? classes.navToggle__active__dark  :menuOpen  && !isDarkTheme  ?classes.navToggle__active :isDarkTheme && !menuOpen ? classes.nav__dark__list :classes.nav__list  }>
                        <a className={ isDarkTheme ? classes.nav__dark__list__description__link: classes.nav__list__description__link} href='#about'>
                            <li className={classes.nav__list__description}>About </li>
                        </a>
                        <a className={ isDarkTheme ? classes.nav__dark__list__description__link: classes.nav__list__description__link} to="/about-us" href='#skills'>
                            <li className={classes.nav__list__description}>skills </li>

                        </a>
                        <a className={ isDarkTheme ? classes.nav__dark__list__description__link: classes.nav__list__description__link} to="/about-us" href='#projects'>
                            <li className={classes.nav__list__description}>Projects </li>
                        </a>
                        <a className={ isDarkTheme ? classes.nav__dark__list__description__link: classes.nav__list__description__link} to="/about-us" href='#contact'>
                            <li className={classes.nav__list__description}>Contact </li>

                        </a>
                    </ul>
        
                </nav>

          </header>
    </>
    );
}

//   return (
//         <div className={classes.header}>
//             <div className={classes.header__logo}>
//                 <img className={classes.header__img} src={Logo} alt="headre logo" />
//             </div>           
//             <div className={classes.navbar}>
//                 <ul className={classes.navbar__list}>
//                     <a href="#About"><li className={classes.navbar__list__item}>About</li></a>
//                     <a href="#Skills"><li className={classes.navbar__list__item}>Skills</li></a>
//                     <a href="#Projects"><li className={classes.navbar__list__item}>Projects</li></a>
//                     <a href="#Contact"><li className={classes.navbar__list__item}>Contact</li></a>
//                 </ul>
//             </div>
//         </div>

//   )
// }

export default Home