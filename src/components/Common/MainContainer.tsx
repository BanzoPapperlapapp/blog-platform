import React from 'react';
import st from './MainContainer.module.css'
type ContainerTypes  = {
    children: React.ReactNode
    style:  string
}
export const MainContainer = ({children, style}: ContainerTypes) => {
    const finalClassName = style ? `${style} ${st.container}` : st.container
    return (
        <div className={finalClassName}>
            {children}
        </div>
    );
};