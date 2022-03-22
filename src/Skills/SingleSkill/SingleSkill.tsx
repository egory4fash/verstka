import React from "react";
import s from './SingleSkill.module.css'
import styleContainer from "../../common/styles/Container.module.css";

type SingleSkillPropsType = {
    title:string,
    description:string
}

export const SingleSkill = (props:SingleSkillPropsType) => {
    return (
        <div className = { s.singleSkill} >
            <div className = {s.icon}>none</div>
            <h3>{props.title}</h3>
            < span className = {s.description}>{props.description}</span>
        </div>
    )
}