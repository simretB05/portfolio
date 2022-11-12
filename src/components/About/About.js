import React from "react";
import classes from "../About/About.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {useTheme, useThemeUpdate} from  "../ThemeContext"


function About() {
    const isDarkTheme = useTheme();
    return (
        
        
        <div  id="about" className={ isDarkTheme?classes.content__dark: classes.content}>
        <div className={isDarkTheme? classes.main__dark:classes.main}>
            <div className={ isDarkTheme? classes.main__dark__container:classes.main__container}>
                <div className={isDarkTheme? classes.main__dark__container__card:classes.main__container__card}>
                    <h3 className={isDarkTheme? classes.main__dark__container__card__title:classes.main__container__card__title}> About Me</h3>
                    <div className={isDarkTheme? classes.main__dark__container__card__content:classes.main__container__card__content}>
                        <p className={isDarkTheme? classes.main__dark__container__card__content__body:classes.main__container__card__content__body}> In 2021 I started looking into the field of web development. My passion has developed  ever since. I  dedicated myself to learning and Creating websites that are user-friendly and fun. I have gone through different skill-building boot camps over the last year to become a Full Stack Web Developer. I am a dedicated problem solver, Skilled in analyzing data, detail-oriented, team player, with excellent communication skills. 
 </p>
                        <p className={isDarkTheme? classes.main__dark__container__card__content__body:classes.main__container__card__content__body}> Highlights of what I have  learned so far include, frontend web development, interactive front end as per the design, React and React Native, Redux for State management, Building REST API, and Managing database,working with groups on Git and Github. </p>
                    </div>
                </div>
                <div className={classes.main__container__signture}>
                    <p className={isDarkTheme? classes.main__container__signture__text__dark: classes.main__container__signture__text }>Simret Paulos</p>
                </div>
                <div className={classes.footer__iconLinks}>
                    <ul className={classes.footer__iconLinks__list}>
                        <li className={classes.footer__iconLinks__list__item}><a href="https://www.linkedin.com/in/sim-paulos-2394a5246/"><FontAwesomeIcon size='2x' className={isDarkTheme? classes.footer__iconLinks__list__twitter__dark:classes.footer__iconLinks__list__twitter} icon={faLinkedin}  /></a></li>
                       <li className={classes.footer__iconLinks__list__item}> <a href="https://github.com/simretB05/portfolio"><FontAwesomeIcon size='2x' className={isDarkTheme? classes.footer__iconLinks__list__linkedIcon__dark:classes.footer__iconLinks__list__linkedIcon}  icon={faGithub} /></a>  </li>
                    </ul>
                </div>
                <div className={classes.main__container__btnCard}>
                    <button className={isDarkTheme? classes.main__container__btnCard__btn__dark:classes.main__container__btnCard__btn} > Click here for my Resume</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About