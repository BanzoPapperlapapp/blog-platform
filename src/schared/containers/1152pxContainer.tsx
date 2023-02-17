import React from 'react';
import st from './1152pxContainer.module.css'
type ContainerTypes  = {
    children: React.ReactNode
    style:  string
}
export const MainContainer = ({children, style}: ContainerTypes) => {
    const finalClassName = style ? `${style} ${st._container}` : st._container
    return (
        <div className={finalClassName}>
            {children}
        </div>
    );
};
