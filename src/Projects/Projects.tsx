import React from "react";
import s from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {SingleProject} from "./SingleProject/SingleProject";


export const Projects = () => {
    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <SingleProject title = {"Dunno1"} description={"Dunno what, but cool"}/>
                    <SingleProject  title = {"Dunno2"} description={"Dunno what, but cool, definitely. Lorem ipsum,bla-bla-bla..."}/>
                </div>
            </div>
        </div>
    )

}