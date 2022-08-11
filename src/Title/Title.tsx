import React from 'react'
import s from "./Title.module.css";

export type TitlePropsType = {
    title:string
}

export const Title = (props:TitlePropsType) => {
    return (
        <div>
            <h2 className={s.title}>{props.title}</h2>
        </div>
)
}