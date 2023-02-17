import React, {useState} from 'react';
import st from './Login.module.css'
import {useNavigate} from "react-router-dom";
import {logInAC} from "../../app/store/AuthReducer";
import {useAppDispatch} from "../../app/store/Store";
export const Login = () => {
    const [logTitle, setLogTitle] = useState<string>('')
    const [passTitle, setPassTitle] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const onSubmitLoginHandler = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(logInAC(logTitle,passTitle))
        navigation('/')
    }
    const onChangeLogInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value.trim() && setLogTitle(e.currentTarget.value)
    }
    const onChangePassInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value.trim() && setPassTitle(e.currentTarget.value)
    }
    return (
        <div className={st.login__container}>
            <form className={st.login__form} onSubmit={onSubmitLoginHandler}>
                <h3>Авторизация</h3>
                <input type={"text"} placeholder={'Login'} value={logTitle} onChange={onChangeLogInputValueHandler} required/>
                <input type={"password"} placeholder={'Password'} value={passTitle} onChange={onChangePassInputValueHandler} required/>
                <button type={'submit'}>Войти</button>
            </form>
        </div>
    );
};