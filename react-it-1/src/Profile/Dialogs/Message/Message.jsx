import  React  from 'react';
import classes from './message.module.scss'

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message;