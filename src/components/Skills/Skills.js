import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompassDrafting } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import {faDatabase} from  '@fortawesome/free-solid-svg-icons';
import { faHtml5, faJs, faReact, faHtml3 } from '@fortawesome/free-brands-svg-icons';
import {useTheme} from  "../ThemeContext"



import classes from "../Skills/Skills.module.scss";
import SkillsComponent from '../SkillsPro/skillsComponent';

function Skills() {
  const isDarkTheme = useTheme();

  return (
    <div  id="skills" className={ isDarkTheme?classes.content__dark: classes.content}>

    <div  className={isDarkTheme ?classes.main__dark:classes.main}>
        <div className={classes.main__container}>
            <div className={classes.main__container__card}>
                <h1 className={isDarkTheme ? classes.main__dark__container__card__title:classes.main__container__card__title}> check out my progressing skills</h1>
            </div>
            <div className={classes.main__container__bodyCard}>
                <p className={isDarkTheme ? classes.main__dark__container__bodyCard__body:classes.main__container__bodyCard__body}> I started my web development journey aiming to gain skills in the ever-developing vast field of Computers and information technology world. My skills came gradually. I am still working on projects to perfect my knowledge, But here are some of my current skills including cloud computing on AWS services.  </p>
            </div>
            <div className={classes.service__container}>
            <div className={isDarkTheme ?classes.service__card__dark:classes.service__card}>
                      <FontAwesomeIcon icon={faLaptop} className={classes.FontAwesomeIcon} size='2x' />
                        <div className={classes.service__card__container}>
                            <h3 className={isDarkTheme ? classes.service__card__dark__container__title:classes.service__card__container__title}>Web Development</h3>
                            {/* <p className={isDarkTheme ? classes.service__card__dark__container__body:classes.service__card__container__body}></p> */}
                          <div className={classes.service__card__container__icons}>
                              <SkillsComponent/>
                             </div>
                        </div>
                      
                    </div> 
                  <div className={isDarkTheme ?classes.service__card__dark:classes.service__card}>
                      <FontAwesomeIcon  className={classes.FontAwesomeIcon} size='2x' icon={faCompassDrafting} />
                        <div className={classes.service__card__container}>
                            <h3 className={isDarkTheme ? classes.service__card__dark__container__title:classes.service__card__container__title}>Design</h3>
                            {/* <p className={isDarkTheme ? classes.service__card__dark__container__body:classes.service__card__container__body}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum, Laudantium nisi harum voluptatem</p> */}
                            <div className={classes.service__card__container__icons}>
                                <div className={isDarkTheme? classes.skills__dark: classes.skills}>
                                    <div className={classes.skillsGrid}>
                                        <img   className={classes.skillsGrid__img}src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="The logo icon for Figma" title="Figma" />
                                        <img  className={classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="The logo icon for PhotoShope" title="Photoshope" />
                                  </div>
                                </div>
                            </div>
                      </div>
                    </div>
                    <div className={isDarkTheme ?classes.service__card__dark:classes.service__card}>
                      <FontAwesomeIcon  className={classes.FontAwesomeIcon} size='2x' icon={faCloud} />
                        <div className={classes.service__card__container}>
                            <h3 className={isDarkTheme ? classes.service__card__dark__container__title:classes.service__card__container__title}>Cloud Service</h3>
                            {/* <p className={isDarkTheme ? classes.service__card__dark__container__body:classes.service__card__container__body}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum, Laudantium nisi harum voluptatem</p> */}
                            <div className={classes.service__card__container__icons}>
                                <div className={isDarkTheme? classes.skills__dark: classes.skills}>
                                  <div className={classes.skillsGrid}>
                                       <img className={classes.skillsGrid__amazon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"  />
                                        <img className={classes.skillsGrid__amazon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                                  </div>
                                </div>
                            </div>
                      </div>
                  </div>  
                  <div className={isDarkTheme ?classes.service__card__dark:classes.service__card}>
                      <FontAwesomeIcon  className={classes.FontAwesomeIcon} size='2x'icon={faDatabase} />
                        <div className={classes.service__card__container}>
                            <h3 className={isDarkTheme ? classes.service__card__dark__container__title:classes.service__card__container__title}>Backend Technologies</h3>
                            {/* <p className={isDarkTheme ? classes.service__card__dark__container__body:classes.service__card__container__body}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum, Laudantium nisi harum voluptatem</p> */}
                            <div className={classes.service__card__container__icons}>
                            <div className={isDarkTheme? classes.skills__dark: classes.skills}>
                                    <div className={classes.skillsGrid}>
                                        <img className={classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for node" title="node" />
                                        <img   className={classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="The logo icon for Python" title="Python" />
                                        <img  className={classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="The logo icon for Mysql" title="Mysql" />
                                  </div>
                                </div>
                            </div>
                      </div>
                    </div> 
                   
                </div> 
        </div>
      </ div>
      </div>
  )
}

export default Skills