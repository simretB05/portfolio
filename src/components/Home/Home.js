import React, { useState } from "react";
import classes from "../Home/Home.module.scss"
import Logo from "../images/logo.jpg"

function Home() {

    
    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

  return (
      <>
            <header className={classes.header}>
        
                <div className={classes.header__toggle}>
        
                    <button className={classes.header__toggle__btn} onClick={menuToggleHandler} aria-label="Open menu">
                        <div className={menuOpen ? classes.header__toggle__btn__open : classes.header__toggle__btn__burger}   ></div>
                    </button>
        
                    <a className={classes.header__toggle__home__link} href="#home">
                        <img className={classes.header__toggle__logo} src={Logo} alt="log img"/>
                    </a>
                </div>
                <nav className={classes.nav}>
                    <ul className={menuOpen ? classes.navToggle__active : classes.nav__list}>
                        <a className={classes.nav__list__description__link} href='#About'>
                            <li className={classes.nav__list__description}>About </li>
                        </a>
                        <a className={classes.nav__list__description__link} to="/about-us" href='#Skills'>
                            <li className={classes.nav__list__description}>skills </li>

                        </a>
                        <a className={classes.nav__list__description__link} to="/about-us" href='#Projects'>
                            <li className={classes.nav__list__description}>Projects </li>
                        </a>
                        <a className={classes.nav__list__description__link} to="/about-us" href='#Contact'>
                            <li className={classes.nav__list__description}>Contact </li>

                        </a>
                    </ul>
        
                </nav>
    

            </header>
                    
          <div className={classes.hero}>
              <div className={classes.hero__main}>
                    <h1 className={classes.hero__main__header}>Hi,i am Simret Paulos</h1>
                    <h3 className={classes.hero__main__text} >Aspiring Front End Web Developer.</h3>
                </div>
            </div>
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