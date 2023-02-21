import React, {useState} from 'react';
import st from './MyModal.module.css'
import {useAppDispatch} from "../../app/store/Store";
import {showModalAC} from "../../app/store/AppReducer";
type MyModalPropsType = {
    children: React.ReactNode
    isActive: boolean
}
export const MyModal = ({children, isActive}: MyModalPropsType) => {
    const dispatch = useAppDispatch()
    const onBlurCloseModalHandler = () => dispatch(showModalAC(false,'delPost'))
    const finalMyModalClass = isActive ? `${st.myModal} ${st.active}` : st.myModal
    return (
        <div className={finalMyModalClass} onClick={onBlurCloseModalHandler}>
            <div className={st.myModelContent} onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};