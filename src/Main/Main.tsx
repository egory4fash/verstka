import React from "react";
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photo from '../assets/images/imgonline-com-ua-Resize-9Ga5RfsucH9.jpg'


export const Main = (props: any) => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I'm Egor</h1>
                    <p>Front Dev</p>
                </div>
                <div
                    className={s.photo}>
                    <img src={photo} width={'300px'} height={'400px'}/>
                </div>
            </div>

        </div>
    )
}