import React from 'react';
import {NavLink} from "react-router-dom";
import st from './SNavLink.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

type CustomNavLinkType = {
    title: string
    to: string
    icon?: IconDefinition
}
export const SNavLink = ({title, to, icon}: CustomNavLinkType) => {
    const getNavLink = (props: { isActive: boolean, isPending: boolean }) =>
        props.isActive ? `${st.link} ${st._active}` : st.link


    return (

        <NavLink to={to} className={getNavLink}>
                {icon && <FontAwesomeIcon icon={icon}/>}
                <span>{title}</span>
        </NavLink>

    );
};