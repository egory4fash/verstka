import React from "react";
import s from './SingleSkill.module.scss'
import {StyleObjType} from "../../Projects/SingleProject/SingleProject";


type SingleSkillPropsType = {
    title:string,
    description:string,
    style:StyleObjType
}


export const SingleSkill = (props:SingleSkillPropsType) => {
    return (
        <div className = {s.singleSkill} >
            <div className ={s.icon} style={props.style} ></div>
            <h3>{props.title}</h3>
            <span className = {s.description}>{props.description}</span>
        </div>
    )
}