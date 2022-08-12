import React from "react";
import s from './SingleProject.module.scss'

type SingleProjectPropsType = {
    title:string,
    description:string,
    style:StyleObjType
}
export type StyleObjType = {
    backgroundImage:string,
}

export const SingleProject = (props:SingleProjectPropsType) => {
    return (
        <div className={s.singleProject}>
            <div className = {s.picture} style = {props.style}>
                <button className={s.button} onClick={ () => {alert("Sorry,nothing here")}}>link</button>
            </div>
            <div className = {s.projectInfo}>
                <h3 className = {s.projectTitle}>{props.title}</h3>
                <span className = {s.description}>{props.description}</span>
            </div>
        </div>
    )
}