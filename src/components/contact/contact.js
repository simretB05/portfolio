import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import classes from '../contact/contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTheme, } from "../ThemeContext"
import AddressImag from "../images/profileImg3.jpg"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { db } from '../firebase';
// import { db } from "../firebase"


function Contact() {
    const isDarkTheme = useTheme();

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // db.collection('contacts').add
}

    return (
        <div id='contact' className={ isDarkTheme?classes.content__dark: classes.content}>

            <div  className={isDarkTheme? classes.form__container__dark:classes.form__container}>
                <h1 className={isDarkTheme ?classes.form__container__dark__title:classes.form__container__title}>Contact</h1>
                <p className={isDarkTheme? classes.form__container__dark__copy:classes.form__container__copy}> If you have any questions, feel free to contact me at the address provided or drop me a message with your name and email address in the message box.</p>
                <div className={isDarkTheme?classes.address__dark:classes.address}>
                        <h3 className={isDarkTheme? classes.address__dark__title:classes.address__title}>Let's Connect</h3>
                        <ul className={classes.address__list}>
                            <li className={classes.address__list__item}>
                                <div className={isDarkTheme? classes.address__dark__list__item__icon:classes.address__list__item__icon}>
                                    <FontAwesomeIcon className={classes.FontAwesomeIcon} icon={faLocationArrow} />
                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>Address</p>
                                    <p className={classes.address__list__item__title}>Grande Prairie, Alberta, Canada</p>
                                </div>
                            </li>
                            <li className={classes.address__list__item}>
                                <div className={isDarkTheme? classes.address__dark__list__item__icon:classes.address__list__item__icon}>
                                    <FontAwesomeIcon className={classes.FontAwesomeIcon} icon={faPhone} />
                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>Phone number</p>
                                    <p className={classes.address__list__item__title}>+1204-333-7744</p>
                                </div>
                            </li>
                            
                            <li className={classes.address__list__item}>
                                <div className={isDarkTheme? classes.address__dark__list__item__icon:classes.address__list__item__icon}>
                                    <a href="https://www.linkedin.com/in/sim-paulos-2394a5246/"><FontAwesomeIcon  className={classes.FontAwesomeIcon} icon={faLinkedin}  /></a>
                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>linkedin Address</p>
                                </div>
                            </li>
                            <li className={classes.address__list__item}>
                                <div className={isDarkTheme? classes.address__dark__list__item__icon:classes.address__list__item__icon}>
                                <li className={classes.address__list__item__gitHub}> <a href="https://github.com/simretB05/portfolio"><FontAwesomeIcon  className={classes.FontAwesomeIcon}  icon={faGithub} /></a>  </li>

                                </div>
                                <div className={classes.address__list__item__copy}>
                                    <p className={classes.address__list__item__title}>Github Address</p>
                                </div>
                            </li>
                         </ul>
                    </div>
                <div className={isDarkTheme? classes.form__container__dark__mainContent:classes.form__container__dark__mainContent}>
                    <form id="contactForm" 
                        onSubmit={handleSubmit}
                        className={isDarkTheme ? classes.form__dark : classes.form}>
                        <div className={isDarkTheme? classes.form__dark__input__box:classes.form__input__box}>
                            <input
                                id="name"
                                className={isDarkTheme ? classes.form__dark__input__text : classes.form__input__text}
                                type="text" required
                                placeholder="Your name"
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                            />
                        </div>
                        <div className={isDarkTheme? classes.form__dark__input__box:classes.form__input__box}>
                            <input id="email"
                                className={isDarkTheme ? classes.form__dark__input__text : classes.form__input__text}
                                type="text" required
                                placeholder="E-mail"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className={isDarkTheme? classes.form__dark__message__box:classes.form__message__box}>
                            <textarea id ="message" className={isDarkTheme? classes.form__dark__input__textArea:classes.form__input__textArea} placeholder=" Your Message" name="textarea" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className={isDarkTheme? classes.form__dark__input__box:classes.form__input__box}>
                            <input className={isDarkTheme? classes.form__dark__submit__btn:classes.form__submit__btn} type="submit" value="Send Message" />
                        </div>
                    </form>
                    <div className={classes.adress__profile}>
                    <img className={classes.adress__profile__img} src={AddressImag} alt="address image" />
                </div>
                </div>

            </div>
        </div>
    )

};
export default Contact;