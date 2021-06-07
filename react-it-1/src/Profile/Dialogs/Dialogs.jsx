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

const Dialogs = (props) => {
    let dialogsData = [
        {
            id: 1,
            name: 'Victor'
        },
        {
            id: 2,
            name: 'Sergij'
        },
        {
            id: 3,
            name: 'Aleksander'
        },
        {
            id: 4,
            name: 'Alenka'
        },
        {
            id: 5,
            name: 'Ivan'
        },
        {
            id: 6,
            name: 'Aleksey'
        }
    ]
    let messagesData = [
        {
            id: 1,
            message: 'Привет'
        },
        {
            id: 2,
            message: "Как твои дела?"
        },
        {
            id: 3,
            message: "У меня все хорошо)"
        },
    ]

    let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElement = messagesData.map(message => <Message message={message.message} id={message.id} />)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div >
    )
}


export default Dialogs;