import React from "react";
import s from './SingleSkill.module.css'

type SingleSkillPropsType = {
    title:string
}

export const SingleSkill = (props:SingleSkillPropsType) => {
    return (
        <div className = {s.singleSkill} >
            <div className = {s.icon}></div>
            <h3>{props.title}</h3>
        </div>
    )
}