import React from "react";
import s from './RemoteJob.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../Title/Title";

export const RemoteJob = () => {
    return (
        <div className =  {s.block}>
            <div className = {`${styleContainer.container} ${s.remoteContainer}`}>
            <Title title = {`I'm availible for Freelance`} />
            <button className = {s.button} onClick={ () => {alert("Under construction")}}>Do it faster:)</button>
            </div>
        </div>
    )
}