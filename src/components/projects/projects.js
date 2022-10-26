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
import Project3 from  '../images/UrlShortning.jpg';
import Project4 from '../images/bookmark.jpg'; 
import Project5 from  '../images/essentialoilReact.jpg';
import Project6 from '../images/sneakerCompany.jpg' 
import classes from "../projects/projects.module.scss";
import SkillsComponent  from '../SkillsPro/skillsComponent';

function Projects() {
  const isDarkTheme = useTheme();
  return (
    <div  id="projects" className={isDarkTheme ? classes.content__dark:classes.content}>
          <div className={isDarkTheme ?classes.container__dark:classes.container}>
                <h1 className={isDarkTheme ? classes.container__dark__title:classes.container__title}> Projects</h1>
            <div className={isDarkTheme ?classes.container__dark__card:classes.container__card}>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project1 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 1</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>this is a music band project i did for an assignment for a bootcamp. I used react and the project involves adding concert tikets and deleting them plus adding a comment on the reviwe section</p>
                        <a href="https://sunny-bonbon-17baef.netlify.app"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project2 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 2</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                        <a href="https://unique-blancmange-c3b065.netlify.app/"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project3 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 3</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                        <a href="https://url-shortening-123.netlify.app/"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project4 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 4</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                        <a href="https://determined-brahmagupta-fbb485.netlify.app/"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project5 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 5</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                        <a href="https://dancing-arithmetic-dee120.netlify.app"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                  </div>
                  <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project6 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 6</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>Lorem ipsum dolor sit amet consectetur.</p>
                        <a href="https://taupe-stroopwafel-935142.netlify.app/"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Projects;