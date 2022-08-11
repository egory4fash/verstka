import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css';
import {SingleProject} from './SingleProject/SingleProject';
import {Title} from '../Title/Title';
import firstImage from '../../src/assets/images/1st.svg'
import secondImage from '../../src/assets/images/2nd.svg'


export const Projects = () => {

    const pic1 = {
        backgroundImage: `url(${firstImage})`,

    }
    const pic2 = {
        backgroundImage: `url(${secondImage})`,
    }
    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <div >
                <Title title={'Projects'} />
                </div>
                <div className={s.projects}>
                    <SingleProject style = {pic1} title = {"Dunno1"} description={"Dunno what, but cool"} />
                    <SingleProject  style = {pic2} title = {"Dunno2"} description={"Dunno what, but cool, definitely. Lorem ipsum,bla-bla-bla..."} />
                </div>
            </div>
        </div>
    )

}