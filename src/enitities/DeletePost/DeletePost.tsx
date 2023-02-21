import React from 'react';
import st from './DeletePost.module.css'
import {useAppDispatch, useAppSelector} from "../../app/store/Store";
import {showModalAC} from "../../app/store/AppReducer";
export const DeletePost = () => {
    const dispatch = useAppDispatch()
    const onClickCloseModal = () => dispatch(showModalAC(false,'delPost'))
    return (
        <div className={st.container}>
            <div className={st.header}>
                <h3>Delete a post</h3>
                <button onClick={onClickCloseModal}>X</button>
            </div>
            <div className={st.content}>
                <div className={st.text}>
                    Are you sure you want to delete this post?
                </div>
                <div className={st.buttonsGroup}>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
        </div>
    );
};