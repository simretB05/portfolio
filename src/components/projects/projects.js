import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompassDrafting } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import {faDatabase} from  '@fortawesome/free-solid-svg-icons';
import { faHtml5, faJs, faReact, faHtml3 } from '@fortawesome/free-brands-svg-icons';
import {useTheme} from  "../ThemeContext"

import Project1 from '../images/bandsite22.jpg'; 
import Project2 from '../images/essentialOil.jpg'; 
import Project3 from '../images/essentialoilReact.jpg'; 
import Project4 from '../images/bookmark.jpg'; 
import Project5 from '../images/UrlShortning.jpg'; 






import classes from "../projects/projects.module.scss";
import SkillsComponent from '../SkillsPro/skillsComponent';

function Projects() {
  const isDarkTheme = useTheme();

  return (
    <div  id="projects" className={classes.content}>
        <div className={classes.container}>
            <div className={classes.container__card}>
                <div className={classes.container__card__item}>
                    <img className={classes.container__card__item__img} src={Project1 } alt="bandsite__img" />
                    <div className={classes.container__card__item__details}>
                        <h1 className={classes.container__card__item__details__title}>Card 1</h1>
                        <p className={classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                <div className={classes.container__card__item}>
                    <img className={classes.container__card__item__img} src={Project2 } alt="bandsite__img" />
                    <div className={classes.container__card__item__details}>
                        <h1 className={classes.container__card__item__details__title}>Card 1</h1>
                        <p className={classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                <div className={classes.container__card__item}>
                    <img className={classes.container__card__item__img} src={Project3 } alt="bandsite__img" />
                    <div className={classes.container__card__item__details}>
                        <h1 className={classes.container__card__item__details__title}>Card 1</h1>
                        <p className={classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                <div className={classes.container__card__item}>
                    <img className={classes.container__card__item__img} src={Project4 } alt="bandsite__img" />
                    <div className={classes.container__card__item__details}>
                        <h1 className={classes.container__card__item__details__title}>Card 1</h1>
                        <p className={classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className={classes.container__card__item}>
                    <img className={classes.container__card__item__img} src={Project5} alt="bandsite__img" />
                    <div className={classes.container__card__item__details}>
                        <h1 className={classes.container__card__item__details__title}>Card 1</h1>
                        <p className={classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
)
}

export default Projects;