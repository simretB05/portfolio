import React from "react";
import classes from "../About/About.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div className={classes.main}>
        <div className={classes.main__container}>
            <div className={classes.main__container__card}>
                <h1 className={classes.main__container__card__title}> About Me</h1>
                <div className={classes.main__container__card__content}>
                    <p className={classes.main__container__card__content__body}> There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered in some form, by injected humour,
                        or randomised words which dont look even slightly believable. If
                        you are going to use a passage of Lorem Ipsum,</p>
                    <p className={classes.main__container__card__content__body}> There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered in some form, by injected humour,
                        or randomised words which dont look even slightly believable. If
                        you are going to use a passage of Lorem Ipsum,</p>
                    <p className={classes.main__container__card__content__body}></p>
                </div>
            </div>
            <div className={classes.main__container__signture}>
                    <p className={classes.main__container__signture__text}>Simret Paulos</p>
              </div>
              <div className={classes.footer__iconLinks}>
                <ul className={classes.footer__iconLinks__list}>
                    <li className={classes.footer__iconLinks__list__item}><FontAwesomeIcon className={classes.footer__iconLinks__list__facebookIcon} icon={faFacebook}  /></li>
                    <li className={classes.footer__iconLinks__list__item}><FontAwesomeIcon className={classes.footer__iconLinks__list__twitter} icon={faTwitter} /></li>
                    <li className={classes.footer__iconLinks__list__item}><FontAwesomeIcon className={classes.footer__iconLinks__list__instagramIcon} icon={faInstagram} /></li>
                </ul>
            </div>
            <div className={classes.main__container__btnCard}>
                    <button className={classes.main__container__btnCard__btn} > Click here for my Resume</button>
            </div>
        </div>
    </div>

  )
}

export default About