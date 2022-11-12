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
              <div  className={classes.hero__divider1}></div>
          <img className={ classes.hero__divider__img} src={hero} alt="hero img" />
            
      
            <div className= {classes.hero__divider3}>
                <h1 className={classes.hero__divider3__title}>Hi,my name is Simret Paulos</h1>
                <h3 className={classes.hero__divider3__text} >Aspiring Front End Web Developer.</h3>
            </div>
              <div className={isDarkTheme? classes.divider2__dark:classes.divider2}>
                  {/* <div className={isDarkTheme ?classes.address__dark:classes.address}> */}
        <ul className={ isDarkTheme? classes.address__dark__list:classes.address__list}>
                            <li className={ isDarkTheme? classes.address__dark__list__item__address:classes.address__list__item__address}>
                                <div className={isDarkTheme? classes.address__dark__list__item__address__icon:classes.address__list__item__address__icon}>
                                    <FontAwesomeIcon className={classes.FontAwesomeIcon} icon={faLocationArrow} />
                                </div>
                                <div className={isDarkTheme? classes.address__dark__list__item__adress__copy: classes.address__list__item__address__copy}>
                                    <p className={isDarkTheme? classes.address__dark__list__item__address__title: classes.address__list__item__address__title}>Address</p>
                              <p className={ isDarkTheme?classes.address__dark__list__item__address__title:classes.address__list__item__address__title}>Grande Prairie,</p>
                              <p className={ isDarkTheme?classes.address__dark__list__item__address__title:classes.address__list__item__address__title}>Alberta, Canada</p>

                                </div>
                            </li>
                            <li className={isDarkTheme? classes.address__dark__list__item__phone:classes.address__list__item__phone}>
                                <div className={isDarkTheme? classes.address__dark__list__item__phone__icon:classes.address__list__item__phone__icon}>
                                    <FontAwesomeIcon className={classes.FontAwesomeIcon} icon={faPhone} />
                                </div>
                                <div className={isDarkTheme? classes.address__dark__list__item__phone__copy: classes.address__list__item__phone__copy}>
                                    <p className={isDarkTheme? classes.address__dark__list__item__phone__title:classes.address__list__item__phone__title}>Phone number</p>
                                    <p className={isDarkTheme?classes.address__dark__list__item__phone__title:classes.address__list__item__phone__title}>+1204-333-7744</p>
                                </div>
                            </li>
                            
                            <li className={ isDarkTheme?classes.address__dark__list__item__linked:classes.address__list__item__linked}>
                                <div className={isDarkTheme? classes.address__dark__list__item__linked__icon:classes.address__list__item__linked__icon}>
                                    <a href="https://www.linkedin.com/in/sim-paulos-2394a5246/"><FontAwesomeIcon  className={classes.FontAwesomeIcon} icon={faLinkedin}  /></a>
                                </div>
                                <div className={isDarkTheme?classes.address__dark__list__item__linked__copy:classes.address__list__item__linked__copy}>
                                    <p className={isDarkTheme?classes.address__dark__list__item__linked__title:classes.address__list__item__linked__title}>linkedin Address</p>
                                </div>
                            </li>
                            <li className={isDarkTheme? classes.address__dark__list__item__github:classes.address__list__item__github}>
                                <div className={isDarkTheme? classes.address__dark__list__item__github__icon:classes.address__list__item__github__icon}>
                                 <a href="https://github.com/simretB05/portfolio"><FontAwesomeIcon  className={classes.FontAwesomeIcon}  icon={faGithub} /></a>  

                                </div>
                                <div className={isDarkTheme?classes.address__dark__list__item__github__copy:classes.address__list__item__github__copy}>
                                    <p className={isDarkTheme?classes.address__dark__list__item__github__title:classes.address__list__item__github__title}>Github Address</p>
                                </div>
                            </li>
                      </ul>
        </div>
          </div>
    </div>
  )
}

export default Hero