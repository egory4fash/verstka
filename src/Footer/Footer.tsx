import React from "react";
import s from './Footer.module.scss'
import {Title} from "../Title/Title";


export const Footer = () => {
    return (
        <div className = {s.block}>
            <Title title={'Egor Maksul '}/>
            <div className = {s.blackWhite}>
                <div className = {s.square}></div>
                <div className = {s.square}></div>
                <div className = {s.square}></div>
                <div className = {s.square}></div>
            </div>
            <div className = {s.copyLeft}>
                <h6>2022 All rights reversed v 2.2 :)</h6>
                <img className = {s.img}
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/800px-Copyleft.svg.png'}
                alt={'copyleft pic.'}/>
            </div>
        </div>
    )
}