import React from 'react';
import st from './Main.module.css'
import {MainContainer} from "../../../schared/containers/1152pxContainer";
import {SideBarL} from "../SideBar/SideBarL";
import {BreadCrumbs} from "../../../widgets/BreadCrumbs/BreadCrumbs";
import {MySelect} from "../../../schared/select/MySelect";


type MainPropsType = {
    children?: React.ReactNode
}
export const Main = ({children}: MainPropsType) => {

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
                            {/*<select>*/}
                            {/*    <option value="value2" >New blogs first</option>*/}
                            {/*    <option value="value3">Old blogs first</option>*/}
                            {/*    <option value="value4">A to Z</option>*/}
                            {/*    <option value="value5">Z to A</option>*/}
                            {/*</select>*/}
                            <MySelect
                                options={[
                                    {value: 'FIFO', label: 'New blogs first'},
                                    {value: 'LIFO', label: 'Old blogs first'},
                                    {value: 'AZ', label: 'A to Z'},
                                    {value: 'ZA', label: 'Z to A'},
                                ]}
                                setSelected={()=>console.log}
                                />
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