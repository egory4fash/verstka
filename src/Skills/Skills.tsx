import React from "react";
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {SingleSkill} from "./SingleSkill/SingleSkill";
import {Title} from "../Title/Title";

export const Skills = (props: any) => {

    const description = "qweasdz xcasdqwe asdzxcas dqwe ghjghjgh jghjghjghjgh    vbnvbn  xcvxcvcv"

    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <SingleSkill title={'React'} description={description}/>
                    <SingleSkill title={'TypeScript'} description={description}/>
                    <SingleSkill title={'HTML/CSS'} description={description}/>
                </div>
            </div>
        </div>
    )
}
