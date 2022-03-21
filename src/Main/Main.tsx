import React from "react";
import s from './Main.module.css'

export const Main = (props:any) => {
    return (
        <div className={s.main}>
            <div className = {s.container} >
            <div className = {s.text}>
                <span>Hi there</span>
                <h1>I'm Egor</h1>
                <p>Front Dev</p>
            </div>
            <div className = {s.photo}></div>
            </div>
        </div>
    )
}