import React from 'react';
import st from './Main.module.css'
import {MainContainer} from "../../../schared/containers/1152pxContainer";
import {SideBarL} from "../SideBar/SideBarL";
import {BreadCrumbs} from "../../../widgets/BreadCrumbs/BreadCrumbs";
import {MySelect} from "../../../schared/select/MySelect";
import {MyInput} from "../../../schared/input/MyInput";
import {FiltersForBlogsAndPosts} from "../../../widgets/FiltersForBlogsAndPosts/FiltersForBlogsAndPosts";
import {useAppDispatch, useAppSelector} from "../../../app/store/Store";
import {showModalAC} from "../../../app/store/AppReducer";


type MainPropsType = {
    children?: React.ReactNode
}
export const Main = ({children}: MainPropsType) => {
    const isAdmin = useAppSelector(state => state.auth).auth
    const {modal} = useAppSelector(state => state.app)
    console.log(modal)
    const dispatch = useAppDispatch()
    const onClickDelPostHandler = () => {
        dispatch(showModalAC(true, 'delPost'))
        console.log('click')
    }
    return (
        <main className={st.main}>
            <MainContainer style={st.main__container}>
                <SideBarL/>
                <section className={st.content}>
                    <div className={st.content__container}>
                        <div className={st.content__header}>
                            <BreadCrumbs />
                        </div>
                        <div className={st.content__settings}>
                            {isAdmin
                                ? <div className={st.admin__settings}><button onClick={onClickDelPostHandler}>Add Post</button></div>
                                : <FiltersForBlogsAndPosts/>
                            }

                        </div>
                        <div className={st.content__body}>
                            {children}
                        </div>
                    </div>
                </section>
            </MainContainer>
        </main>
    );
};