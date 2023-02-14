import React from 'react';
import st from './Login.module.css'
import {RouteProps} from "react-router-dom";
export const Login = (props: RouteProps) => {
    console.log(props)
    const onSubmitLoginHandler = (e: React.FormEvent) => {
        e.preventDefault()
    }
    return (
        <div className={st.login__container}>
            <form className={st.login__form} onSubmit={onSubmitLoginHandler}>
                <h3>Авторизация</h3>
                <input type={"text"} placeholder={'Login'} required/>
                <input type={"password"} placeholder={'Password'} required/>
                <button type={'submit'}>Войти</button>
            </form>
        </div>
    );
};