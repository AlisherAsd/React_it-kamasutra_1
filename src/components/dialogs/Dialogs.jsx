import React from 'react';
import classes from './Dialogs.module.css'
import { Dialog } from './dialogitem/DialogsItem'
import { useSelector } from 'react-redux'
import RedirectToLogin from '../UI/redirecttoogin/RedirectToLogin.jsx'

export const Dialogs = () => {

    const {dialogs} = useSelector(state => state.dialogs)
    const {isAuth} = useSelector(state => state.authUser)

    
    if (!isAuth) {
        return <RedirectToLogin />
    }

    return (
        <>
            <div className={classes.dialogs}>
                
                <div className={classes.dialogs_item}>
                    <h1>Ваши диалоги</h1>
                    { dialogs.map( (el) => { 
                        console.log(el);
                        
                        return <Dialog 
                            name={el.userName} 
                            key={el.id}
                            id={el.id} 
                            photo={el.photos.small} 
                            lastDialogActivityDate={el.lastDialogActivityDate}
                            hasNewMessages={el.hasNewMessages}
                            lastUserActivityDate={el.lastUserActivityDate}
                        /> 
                        }) 
                    }

                </div>
            </div>
        </>
    )
}