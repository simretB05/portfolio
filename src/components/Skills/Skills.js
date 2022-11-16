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
// import SkillsComponent from '../SkillsPro/skillsComponent';

function Skills() {
  const isDarkTheme = useTheme();

  return (
    <div  id="projects" className={isDarkTheme ? classes.content__dark:classes.content}>

            < div className={isDarkTheme ?classes['main-dark']:classes['main']}>
                <div className={classes.main__container}>
                  <div className={classes.main__container__card}>
                      <h1 className={isDarkTheme ? classes.main__dark__container__card__title:classes.main__container__card__title}> check out my progressing skills</h1>
                  </div>
                  {/* <div className={isDarkTheme ?classes.service__card__dark:classes.service__card}>
                  <FontAwesomeIcon icon={faLaptop} className={classes.FontAwesomeIcon} size='2x' />                          <div className={classes.service__card__container}>
                            <h3 className={isDarkTheme ? classes.service__card__dark__container__title:classes.service__card__container__title}>Web Development</h3>
                                    <div className={ isDarkTheme?classes.skillsGrid__dark:classes.skillsGrid}>
                                          <img   className= { isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"color='#e2652b' alt="The logo icon for react" title="react" />
                                          <img   className={isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5" />
                                          <img   className={isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3" />
                                          <img   className={isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"  />
                                          <img   className={isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"alt="The logo icon for JavaScript" title="JavaScript"  />
                                          <img   className={isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="The logo icon for Sass" title="Sass"  />
                                          <img   className={isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="The logo icon for Python" title="Python"  />

                </div>  */}
                          {/* </div> */}
                  {/* </div> */}
                  {/* <div className={isDarkTheme ?classes.service__card__dark:classes.service__card}>
            <FontAwesomeIcon className={classes.FontAwesomeIcon} size='2x' icon={faCloud} />
            <div className={classes.service__card__container}>
                            <h3 className={isDarkTheme ? classes.service__card__dark__container__title:classes.service__card__container__title}>Cloud Service</h3>
                                  <div className={ isDarkTheme?classes.skillsGrid__dark:classes.skillsGrid}>
                                      <img className={ isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
                                      <img className= { isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                                   </div> 
                   </div>
                    
          </div> */}
          {/* <div className={isDarkTheme ?classes.service__card__dark:classes.service__card}>
          <FontAwesomeIcon  className={classes.FontAwesomeIcon} size='2x' icon={faCompassDrafting} />            <div className={classes.service__card__container}>
                            <h3 className={isDarkTheme ? classes.service__card__dark__container__title:classes.service__card__container__title}>Design</h3>
                                  <div className={ isDarkTheme?classes.skillsGrid__dark:classes.skillsGrid}>
                                      <img className={ isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="The logo icon for Figma" title="Figma"  />
                                      <img className= { isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="The logo icon for PhotoShope" title="Photoshope" />
                                   </div> 
                   </div>
                    
          </div> */}
          {/* <div className={isDarkTheme ?classes.service__card__dark:classes.service__card}>
            <FontAwesomeIcon className={classes.FontAwesomeIcon} size='2x' icon={faDatabase} />
            <div className={classes.service__card__container}>
                            <h3 className={isDarkTheme ? classes.service__card__dark__container__title:classes.service__card__container__title}>Backend Technologies</h3>
                                  <div className={ isDarkTheme?classes.skillsGrid__dark:classes.skillsGrid}>
                                      <img className={ isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for node" title="node"  />
                                      <img className= { isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="The logo icon for Python" title="Python" />
                                      <img className= { isDarkTheme?classes.skillsGrid__dark__img:classes.skillsGrid__img} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="The logo icon for Mysql" title="Mysql" />

                                  </div> 
              </div>
                    
          </div> */}
        </div>
        
      </div>
      </div>
      
    
        
      
  )
}

export default Skills