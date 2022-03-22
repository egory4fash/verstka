import React from "react";
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {SingleSkill} from "./SingleSkill/SingleSkill";

export const Skills = (props: any) => {
    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className = {s.title}>Skills</h2>
                <div className={`${styleContainer.container} ${s.skills}`}>
                    <SingleSkill title = {'React'}/>
                    <SingleSkill title = {'TypeScript'}/>
                    <SingleSkill title = {'HTML/CSS'}/>
                </div>
            </div>
        </div>
    )
}
