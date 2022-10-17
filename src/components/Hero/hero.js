import React from "react";
import classes from "../Hero/hero.module.scss"
import hero from "../images/hero.jpg"
import { useTheme } from "../ThemeContext"
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AddressImag from "../images/profileImg3.jpg"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Hero() {
  const isDarkTheme = useTheme();

  return (
    <div id="home" className={isDarkTheme ?classes.content__dark: classes.content}>
            <div className={classes.hero}>
              <div  className={isDarkTheme ? classes.hero__divider1__dark:classes.hero__divider1}></div>
      
          <img className={isDarkTheme ?classes.hero__divider__dark__img: classes.hero__divider__img} src={hero} alt="hero img" />
            
      
            <div className= {isDarkTheme ? classes.hero__divider3__dark:classes.hero__divider3}>
                <h1 className={isDarkTheme ?classes.hero__divider3__dark__title:classes.hero__divider3__title}>Hi,my name is Simret Paulos</h1>
                <h3 className={isDarkTheme ?classes.hero__divider3__dark__text:classes.hero__divider3__text} >Aspiring Front End Web Developer.</h3>
            </div>
        <div className={isDarkTheme ? classes.hero__divider2__drak : classes.hero__divider2}>
        <ul className={classes.address__list}>
                            <li className={classes.address__list__item}>
                                <div className={isDarkTheme? classes.address__dark__list__item__icon:classes.address__list__item__icon}>
                                    <FontAwesomeIcon className={classes.FontAwesomeIcon} icon={faLocationArrow} />
                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>Address</p>
                                    <p className={classes.address__list__item__title}>Grande Prairie, Alberta, Canada</p>
                                </div>
                            </li>
                            <li className={classes.address__list__item}>
                                <div className={isDarkTheme? classes.address__dark__list__item__icon:classes.address__list__item__icon}>
                                    <FontAwesomeIcon className={classes.FontAwesomeIcon} icon={faPhone} />
                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>Phone number</p>
                                    <p className={classes.address__list__item__title}>+1204-333-7744</p>
                                </div>
                            </li>
                            
                            <li className={classes.address__list__item}>
                                <div className={isDarkTheme? classes.address__dark__list__item__icon:classes.address__list__item__icon}>
                                    <a href="https://www.linkedin.com/in/sim-paulos-2394a5246/"><FontAwesomeIcon  className={classes.FontAwesomeIcon} icon={faLinkedin}  /></a>
                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>linkedin Address</p>
                                </div>
                            </li>
                            <li className={classes.address__list__item}>
                                <div className={isDarkTheme? classes.address__dark__list__item__icon:classes.address__list__item__icon}>
                                <li className={classes.address__list__item__gitHub}> <a href="https://github.com/simretB05/portfolio"><FontAwesomeIcon  className={classes.FontAwesomeIcon}  icon={faGithub} /></a>  </li>

                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>Github Address</p>
                                </div>
                            </li>
                         </ul>
        </div>
          </div>
    </div>
  )
}

export default Hero