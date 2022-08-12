import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {SingleSkill} from "./SingleSkill/SingleSkill";
import {Title} from "../Title/Title";
import firstImage from "../assets/images/1st.svg";

export const Skills = (props: any) => {

    const description = "qweasdz xcasdqwe asdzxcas dqwe ghjghjgh jghjghjghjgh    vbnvbn  xcvxcvcv"
    const pic1 = {
        backgroundImage: `url(${firstImage})`,
    }

    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <SingleSkill style = {pic1} title={'React'} description={description}/>
                    <SingleSkill style = {pic1} title={'TypeScript'} description={description}/>
                    <SingleSkill style = {pic1} title={'HTML/CSS'} description={description}/>
                </div>
            </div>
        </div>
    )
}
