import React from "react";
import s from './SingleProject.module.css'

type SingleProjectPropsType = {
    title:string,
    description:string
}

export const SingleProject = (props:SingleProjectPropsType) => {
    return (
        <div className={s.singleProject}>
            <div className = {s.picture}>
                <button className={s.button} onClick={ () => {alert("Sorry,nothing here")}}>СМОТРЕТЬ</button>
            </div>
            <div>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}