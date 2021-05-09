import React, { useState } from "react";
import style from "../styles/Contact.module.css";
import { AiFillPhone } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { GoMailRead } from "react-icons/go";

const Contact = () => {
  const [focusedName, setFocusedName] = useState(false);
  const [focusedMail, setFocusedMail] = useState(false);
  const [focusedPhone, setFocusedPhone] = useState(false);
  const [focusedText, setFocusedText] = useState(false);

  return (
    <div className={style.contact}>
      <div className={style.contact_container}>
        <div className={style.contact_left}>
          <div className={style.contact_left_top}>
            <div className={style.head_container}>
              <h1 className={style.head}>Bizimə əlaqə</h1>
            </div>
            <div className={style.contacts}>
              <div className={style.phone_container}>
                <div className={style.icon_container}>
                  <AiFillPhone />
                </div>
                <p className={style.phone}>(111) 111-11-11</p>
              </div>
              <div className={style.location_container}>
                <div className={style.icon_container}>
                  <GrMapLocation />
                </div>
                <p className={style.location}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className={style.mail_container}>
                <div className={style.icon_container}>
                  <GoMailRead />
                </div>
                <p className={style.mail}>random@mail.ru</p>
              </div>
            </div>
          </div>
          <div className={style.contact_left_bottom}>
            <form className={style.form} autoComplete="off" action="#">
              <div
                className={`${style.name_field} ${focusedName ? style.focused_name : ""
                  }`}
              >
                <label className={style.label} htmlFor="name">
                  Ad
                </label>
                <input
                  onFocus={() => setFocusedName(true)}
                  onBlur={() => setFocusedName(false)}
                  className={style.input}
                  type="text"
                  id="name"
                  placeholder="Adınızı daxil edin..."
                  autoComplete="off"
                />
              </div>
              <div
                className={`${style.email_field} ${focusedMail ? style.focused_mail : ""
                  }`}
              >
                <label className={style.label} htmlFor="email">
                  Email
                </label>
                <input
                  onFocus={() => setFocusedMail(true)}
                  onBlur={() => setFocusedMail(false)}
                  className={style.input}
                  type="email"
                  id="email"
                  placeholder="Mailinizi daxil edin..."
                  autoComplete="off"
                />
              </div>
              <div
                className={`${style.phone_field} ${focusedPhone ? style.focused_phone : ""
                  }`}
              >
                <label className={style.label} htmlFor="phone">
                  Telefon nömrəsi
                </label>
                <input
                  onFocus={() => setFocusedPhone(true)}
                  onBlur={() => setFocusedPhone(false)}
                  className={style.input}
                  type="number"
                  id="phone"
                  placeholder="Telefon nömrənizi daxil edin..."
                  autoComplete="off"
                />
              </div>
              <div
                className={`${style.text_field} ${focusedText ? style.focused_text : ""
                  }`}
              >
                <label className={style.label} htmlFor="text">
                  Mətn
                </label>
                <textarea
                  onFocus={() => setFocusedText(true)}
                  onBlur={() => setFocusedText(false)}
                  className={style.text_input}
                  rows="4"
                  type="text"
                  id="text"
                  placeholder="Mətni daxil edin..."
                  autoComplete="off"
                />
              </div>
              <button className={style.submit_btn} type="submit">
                Göndər
              </button>
            </form>
          </div>
        </div>
        <div className={style.contact_right}>
          <iframe
            className={style.map}
            title="findex"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12156.688183671216!2d49.86886691534423!3d40.38287937003656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ee17e7863a4b848!2sFindex.az!5e0!3m2!1sen!2s!4v1616680438424!5m2!1sen!2s"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
