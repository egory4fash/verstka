import React from "react";
import s from './RemoteJob.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const RemoteJob = () => {
    return (
        <div className =  {s.block}>
            <div className = {`${styleContainer.container} ${s.remoteContainer}`}>
            <h3 className = {s.title}>I'm availible for Freelance</h3>
            <button className = {s.button} onClick={ () => {alert("Under construction")}}>Do it faster:)</button>
            </div>
        </div>
    )
}