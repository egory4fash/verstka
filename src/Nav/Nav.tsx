import React from "react";
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className = {s.nav}>
            <a className = {s.links} href="">Main</a>
            <a className = {s.links} href="">Skills</a>
            <a className = {s.links} href="">Projects</a>
            <a className = {s.links} href="">Contacts</a>
        </div>
    )
}