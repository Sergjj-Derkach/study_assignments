import React from 'react';
import classes from './ProfileInfo.module.scss';


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.contentHeader}></div>
            <div className={classes.profile}>
                <div className={classes.profileFoto}>
                    <span className={classes.foto}></span>
                </div>
                <div className={classes.profileDiscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam architecto ipsa error quo nostrum consequatur dolorum molestias tenetur cupiditate
                 atque illo similique non ad perspiciatis, veritatis voluptatibus, iusto, assumenda sint.</div>
            </div>
        </div>
    )

}

export default ProfileInfo;