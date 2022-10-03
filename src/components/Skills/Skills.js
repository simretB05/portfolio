import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompassDrafting } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import classes from "../Skills/Skills.module.scss"

function Skills() {
  return (
    <div className={classes.main}>
        <div className={classes.main__container}>
            <div className={classes.main__container__card}>
                <h1 className={classes.main__container__card__title}> check out my progressing skills</h1>
            </div>
            <div className={classes.main__container__bodyCard}>
                <p className={classes.main__container__bodyCard__body}> There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,</p>
            </div>
            {/* <div className={classes.main__container__main} >
                    <div className={classes.main__container__content}>
                        <div className={classes.main__container__content__card}>
                            
                        </div>
                        <div className={classes.main__container__content__card}>
                                
                        </div>
                        <div className={classes.main__container__content__card}>
                                
                        </div>
                    </div>
                    
            </div> */}
            <div className={classes.service__container}>
                  <div className={classes.service__card}>
                      <FontAwesomeIcon icon={faLaptop} className={classes.FontAwesomeIcon} size='2x' />
                        {/* <FontAwesomeIcon icon={faReact} className={classes.FontAwesomeIcon} size='2x' /> */}
                        <div className={classes.service__card__container}>
                            <h3 className={classes.service__card__container__title}>Web Development</h3>
                            <p className={classes.service__card__container__body}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum, Laudantium nisi harum voluptatem</p>
                        </div>
                    </div> 
                    <div className={classes.service__card}>
                    <FontAwesomeIcon icon={faLaptop} className={classes.FontAwesomeIcon}  size='2x'/>
                        {/* <FontAwesomeIcon icon={faReact} className={classes.FontAwesomeIcon} size='2x' /> */}
                        <div className={classes.service__card__container}>
                            <h3 className={classes.service__card__container__title}>Web Development</h3>
                            <p className={classes.service__card__container__body}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum, Laudantium nisi harum voluptatem</p>
                        </div>
                    </div>
                    <div className={classes.service__card}>
                    <FontAwesomeIcon icon={faLaptop} className={classes.FontAwesomeIcon} size='2x' />
                        {/* <FontAwesomeIcon icon={faReact} className={classes.FontAwesomeIcon} size='2x' /> */}
                        <div className={classes.service__card__container}>
                            <h3 className={classes.service__card__container__title}>Web Development</h3>
                            <p className={classes.service__card__container__body}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum, Laudantium nisi harum voluptatem</p>
                        </div>
                    </div>  
                    <div className={classes.service__card}>
                    <FontAwesomeIcon icon={faLaptop} className={classes.FontAwesomeIcon} size='2x' />
                        {/* <FontAwesomeIcon icon={faReact} className={classes.FontAwesomeIcon} size='2x' /> */}
                        <div className={classes.service__card__container}>
                            <h3 className={classes.service__card__container__title}>Web Development</h3>
                            <p className={classes.service__card__container__body}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum, Laudantium nisi harum voluptatem</p>
                        </div>
                    </div>
                </div> 
        </div>
    </ div>
  )
}

export default Skills