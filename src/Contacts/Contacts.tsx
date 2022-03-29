import React from "react";
import s from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className = {s.block}>
            <div className = {`${styleContainer.container} ${s.contactsContainer}`}>
                <h3 className = {s.title}>Contacts</h3>
                <form className = {s.inputBlock}>
                    <input className = {s.input} placeholder={'Name,Surname maybe?'}/>
                    <input className = {s.input} placeholder={'e-mail'}/>
                    <textarea className={s.textarea} placeholder={'Enter offered salary here'}></textarea>
                </form>
                <button className = {s.button}>Send</button>
            </div>
        </div>
    )
}