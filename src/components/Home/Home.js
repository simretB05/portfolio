import React, { useState} from "react";
import classes from "../Home/Home.module.scss"
import { useTheme, useThemeUpdate } from "../ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'






function Home() {

    const [modalOpen, setModalOpen]=useState(false)
    const [menuOpen, setMenuOpen] = useState(false);

    const open =()=>setModalOpen(true)
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const menuCloseHandler = () => {
        setMenuOpen(false);

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
                 
                      <input type="checkbox" className={isDarkTheme ? classes.header__theme__toggle__dark:classes.header__theme__toggle }aria-label="dark mode btton" />
                      <label  onClick={onThemeDark}className={isDarkTheme ? classes.header__theme__toggle__dark__lable :classes.header__theme__toggle__lable} for="darkmode-toggle">
                          <FontAwesomeIcon className={isDarkTheme ? classes.FontAwesomeIconSun__dark:classes.FontAwesomeIconSun}  icon={faSun}  />
                           <FontAwesomeIcon className={isDarkTheme ? classes.FontAwesomeIconMoon__dark:classes.FontAwesomeIconMoon} icon={faMoon} />                     
                        </label> 
                </div>
                <nav className={isDarkTheme ? classes.nav__dark :classes.nav}>
                    <ul className= {menuOpen && isDarkTheme ? classes.navToggle__active__dark  :menuOpen  && !isDarkTheme  ?classes.navToggle__active :isDarkTheme && !menuOpen ? classes.nav__dark__list :classes.nav__list  }>
                        <Link to='about' onClick={menuCloseHandler} spy={true} smooth={true} offset={0} duration={900} className={ isDarkTheme ? classes.nav__dark__list__description__link: classes.nav__list__description__link} >
                            <li className={classes.nav__list__description}>About </li>
                        </Link>
                        <Link  to='skills'  onClick={menuCloseHandler} spy={true} smooth={true} offset={0} duration={900} className={ isDarkTheme ? classes.nav__dark__list__description__link: classes.nav__list__description__link} >
                            <li className={classes.nav__list__description}>skills </li>

                        </Link>
                        <Link to='projects'   onClick={menuCloseHandler} spy={true} smooth={true} offset={0} duration={900} className={ isDarkTheme ? classes.nav__dark__list__description__link: classes.nav__list__description__link}  >
                            <li className={classes.nav__list__description}>Projects </li>
                        </Link>
                        <Link  to='contact'  onClick={menuCloseHandler} spy={true} smooth={true} offset={0} duration={900}  Link className={ isDarkTheme ? classes.nav__dark__list__description__link: classes.nav__list__description__link}  >
                            <li className={classes.nav__list__description}>Contact </li>

                        </Link>
                    </ul>
        
                </nav>

          </header>
    </>
    );
}



export default Home