import React from "react";
import s from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../Title/Title";

export const Contacts = () => {
    return (
        <div className={s.block}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={s.inputBlock}>
                    <input className={s.input} placeholder={'Name,Surname maybe?'}/>
                    <input className={s.input} placeholder={'e-mail'}/>
                    <textarea className={s.textarea} placeholder={'Other informatiom'}></textarea>
                </form>
                <button type='submit' className={s.button}>Send</button>
            </div>
        </div>
    )
}