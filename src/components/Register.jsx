import React,{useState} from "react";
import {Container} from "../styled-components/RegisterComponents";

const Register = () => {
    let nameFlag = false;
    setInterval(() => {
        console.log(nameFlag)
    },3000)
    return (
        <Container>
            <div className="form-container">
                <div className="form-container-left">
                    <img src="https://api.findex.az/storage/banner/b02bd7519a3f97623d404b5ee1bc8a5a.svg"
                         alt="register"/>
                </div>
                <div className="form-container-right">
                    <h1>- QEYDİYYAT -</h1>
                    <form action="">
                        <div className="name-surname-fields">
                            <div className={`name-field ${nameFlag && "focusedName"}`}>
                                <label htmlFor="name">Ad</label>
                                <input onFocus={() => nameFlag = true} onBlur={() => nameFlag = false}
                                       placeholder={"Adınızı daxil edin..."} type="text" id={"name"}/>
                            </div>
                            <div className="surname-field">
                                <label htmlFor="surname">Soyad</label>
                                <input placeholder={"Soyadınızı daxil edin..."} type="text" id={"surname"}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Register;
