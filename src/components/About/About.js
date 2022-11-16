import React from "react";
import classes from "../About/About.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme, useThemeUpdate } from "../ThemeContext"
import hero from "../images/hero.jpg"
var ReactRotatingText = require("react-rotating-text");
function About() {
    const isDarkTheme = useTheme();
    return (

        <div id="about" className={ classes.content}>
            <div className={isDarkTheme?classes['main-dark']:classes['main']}>
                <div className={isDarkTheme?classes['profile-dark']:classes['profile']}>
                    <div className={isDarkTheme?classes['profile-dark__card']:classes['profile-card']}>
                        <img className={isDarkTheme?classes['profile-dark__card-pic']:classes['profile-card__pic']} src={hero}  alt="hero pic"/>
                    </div>
                    <div className={isDarkTheme?classes['profile-dark__info']:classes['profile-info']} >
                    <h2>  Hello,I'M Simret Paulos</h2>
                    <p>
                        <ReactRotatingText
                        items={[
                                    "Aspiring Front End Web Developer",
                                    "AWS Cloud Services",
                                    "DevOps",
                                    "UI Design"
                        ]}
                        />
                    </p>
                    </div>
                    <div className={isDarkTheme?classes['profile-dark__social']:classes['profile-social']} >
                        <a href="https://www.linkedin.com/in/sim-paulos-2394a5246/"  className={isDarkTheme?classes['profile-dark__social-link']:classes['profile-social__link']}>< FontAwesomeIcon size='2x'  icon={faLinkedin} className={classes['profile-social__lnkedin']}/></a>
                        <a href="https://github.com/simretB05/portfolio"  className={isDarkTheme?classes['profile-dark__social-link']:classes['profile-social__link']}><FontAwesomeIcon size='2x'   icon={faGithub}  className={classes['profile-social__ghub']}/></a>
                    </div>
                </div>
                <div className={isDarkTheme?classes['about-dark']:classes['about']}>
                    <div className={isDarkTheme?classes['about-dark__card']:classes['about-card']}>
                        <h2> About Me</h2>
                        <div className={isDarkTheme?classes['about-dark__card-body']:classes['about-card__body']}>
                            <p> In 2021 I started looking into the field of web development. My passion has developed  ever since. I  dedicated myself to learning and Creating websites that are user-friendly and fun. I have gone through different skill-building boot camps over the last year to become a Full Stack Web Developer. I am a dedicated problem solver, Skilled in analyzing data, detail-oriented, team player, with excellent communication skills. </p>
                            <p> Highlights of what I have  learned so far include, frontend web development, interactive front end as per the design, React and React Native, Redux for State management, Building REST API, Managing database, and working with groups on Git and Github. </p>
                        </div>
                    </div> 
                    <div className={isDarkTheme?classes['about-dark__card-sig']:classes['about-card__sig']}>
                        <p >Simret Paulos</p>
                        <button > Get my Resume</button>

                    </div> 
                     
                
                </div>
            </div>
     </div>
    )
}

export default About