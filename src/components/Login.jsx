import React, { useState } from "react";
import * as Components from "../styled-components/LoginComponents";
import { FiEyeOff, FiEye } from "react-icons/fi";
import checkboxImage from "../images/checkbox.svg";

const Login = () => {
  const [mailFocused, setMailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <Components.Container>
      <div className="main">
        <h1>Daxil ol</h1>
        <form action="#">
          <div className={`emailField ${mailFocused && "focusedMailField"}`}>
            <label htmlFor="email">Email</label>
            <input
              onFocus={() => setMailFocused(true)}
              onBlur={() => setMailFocused(false)}
              type="email"
              id="email"
              placeholder="Mailinizi daxil edin..."
              autoComplete="off"
            />
          </div>
          <div
            className={`passwordField ${passFocused && "focusedPassField"} ${passwordVisibility ? "turnOn" : "turnOff"
              }`}
          >
            <label htmlFor="password">Şifrə</label>
            <input
              onFocus={() => setPassFocused(true)}
              onBlur={() => setPassFocused(false)}
              type={`${passwordVisibility ? "text" : "password"}`}
              id="password"
              placeholder="Şifrənizi daxil edin..."
              autoComplete="off"
            />
            <FiEyeOff
              onClick={() => setPasswordVisibility(true)}
              className="off"
            />
            <FiEye
              onClick={() => setPasswordVisibility(false)}
              className="on"
            />
          </div>
          <div className="check">
            <input id="checkbox" type="checkbox" />
            <span className="checkbox-span">
              <svg className="checkbox-img" xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 24 24">
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
              </svg>
            </span>
            <label htmlFor="checkbox">Yadda saxla</label>
          </div>
          <button>Daxil ol</button>
          <div className="formBottom">
            <a href="https">Şifrəmi unutdum</a>
            <a href="https">Qeydiyyat</a>
          </div>
        </form>
      </div>
    </Components.Container>
  );
};

export default Login;
