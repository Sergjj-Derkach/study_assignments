import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                <DialogItem name='Victor' id='1' />
                <DialogItem name='Sergij' id='2' />
                <DialogItem name='Aleksander' id='3' />
                <DialogItem name='Alenka' id='4' />
                <DialogItem name='Ivan' id='5' />
                <DialogItem name='Aleksey' id='6' />

            </div>
            <div className={classes.messages}>
                <Message message="Привет" />
                <Message message="Как твои дела?" />
                <Message message="У меня все хорошо)" />

            </div>
        </div >
    )
}


export default Dialogs;