import React from "react";
import s from './Footer.module.css'


export const Footer = () => {
    return (
        <div className = {s.block}>
            <h3>Egor Maksul</h3>
            <div className = {s.blackWhite}>
                <div className = {s.square}></div>
                <div className = {s.square}></div>
                <div className = {s.square}></div>
                <div className = {s.square}></div>
            </div>
            <div className = {s.copyLeft}>
                <h6>2022 All rights reversed :)</h6>
                <img className = {s.img}
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/800px-Copyleft.svg.png'}
                alt={'copyleft pic.'}/>
            </div>
        </div>
    )
}