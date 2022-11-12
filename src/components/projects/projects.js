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

function Projects() {
  const isDarkTheme = useTheme();
  return (
    <div  id="projects" className={isDarkTheme ? classes.content__dark:classes.content}>
          <div className={isDarkTheme ?classes.container__dark:classes.container}>
              <h1 className={isDarkTheme ? classes.container__dark__title : classes.container__title}> Projects</h1>
              <p className={isDarkTheme ? classes.container__dark__titleText : classes.container__titleText}>These are some of the projects I have been practicing on since starting my web development journey. Working on these projects has helped me gain web development skills, communication skills, and confidence that I can do more.  </p>
            <div className={isDarkTheme ?classes.container__dark__card:classes.container__card}>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project1 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 1</h1>
                          <p className={isDarkTheme ? classes.container__dark__card__item__details__text : classes.container__card__item__details__text}>
                          This is a music band website, an assignment for a boot camp class. The main goal of the project is to interact with React components using ReactHooks to Create a CRUD system. Also,the Project follows good practices for  Project Structure with the use of  UI Design, HTML, and SCSS. </p>
                        <a href="https://sunny-bonbon-17baef.netlify.app"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project2 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 2</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>Essential oil is a personal project I built to practice handling an E-commerce cart. Apart from implementing JavaScript for adding and deleting to and from a Cart,  I tried to imitate other websites by giving the project my UI design touch.</p>
                        <a href="https://sprightly-cannoli-87a94c.netlify.app"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project3 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 3</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>URL Shortening website. The project applies URL shortening  API with Javascript. The main focus of this project was to practice working with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done.
</p>
                        <a href="https://url-shortening-123.netlify.app/"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project4 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 4</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>
Bookmark website. Group project that uses Authentication for login and signup using the firebase database. Apart from the main authentication focus, the project helped practice with Groups on Git and Github. Managing Projects, delegating, Creating issues, and deleting them when done</p>
                        <a href="https://determined-brahmagupta-fbb485.netlify.app/"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
                <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project5 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 5</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}> A React Essential oil project. The project uses React Hooks like UseReducer, UseState, UseEffect, and ReactContext to handle data and reusable data management. The website applies CURD for a cart system and a firebase database for login authentication.  </p>
                        <a href="https://dancing-arithmetic-dee120.netlify.app"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                  </div>
                  <div className={isDarkTheme ?classes.container__dark__card__item: classes.container__card__item}>
                    <img className={isDarkTheme ? classes.container__dark__card__item__img :classes.container__card__item__img} src={Project6 } alt="bandsite__img" />
                    <div className={isDarkTheme ?classes.container__dark__card__item__details: classes.container__card__item__details}>
                        <h1 className={isDarkTheme ?classes.container__dark__card__item__details__title:classes.container__dark__card__item__details__title}>Project 6</h1>
                        <p className={isDarkTheme ? classes.container__dark__card__item__details__text:classes.container__card__item__details__text}>a simple e-commerce website built to practice back-drop modals, carousel, and CURD</p>
                        <a href="https://taupe-stroopwafel-935142.netlify.app/"><button className={isDarkTheme ? classes.container__dark__card__item__details__btn:classes.container__card__item__details__btn}>View</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Projects;