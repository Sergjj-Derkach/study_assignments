import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.scss'
import Message from './Message/Message';


const Dialogs = () => {
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