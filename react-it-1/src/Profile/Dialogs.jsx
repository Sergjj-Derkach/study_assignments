import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                <div className={classes.dialog + ' ' + classes.active}>Victor</div>
                <div className={classes.dialog}>Sergij</div>
                <div className={classes.dialog}>Aleksander</div>
                <div className={classes.dialog}>Alenka</div>
                <div className={classes.dialog}>Ivan</div>
                <div className={classes.dialog}>Aleksey</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Привет</div>
                <div className={classes.message}>Как твои дела?</div>
                <div className={classes.message}>У меня все хорошо)</div>

            </div>
        </div>
    )
}


export default Dialogs;