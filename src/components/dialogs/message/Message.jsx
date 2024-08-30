import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import classes from './Message.module.css'
import Preloader from '../../UI/preloader/Preloader'
import { getDialogsWithIDThunk, sendMessageIDThunk } from '../../../redux/dialogs-reducer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Message = (props) => {

    const {pathname} = useLocation()
    const path = pathname.split('/')
    const id = path[2]

    const dispatch = useDispatch()
    // dispatch(getDialogsWithIDThunk(id))

    useEffect(() => {
        dispatch(getDialogsWithIDThunk(id))
    }, [])

    const [text, setText] = useState('')
    const {messages} = useSelector(state => state.dialogs)
    const {user} = useSelector(state => state.authUser)

    if(!messages.length) {
        console.log(messages);
        return <Preloader />
    }

    const sendMess = () => {
        dispatch(sendMessageIDThunk({id, text}))
        setText('')
    }

    return (
        <div className={classes.container}>
            {messages.map(mess => {
                return (
                    <div 
                        className={
                            mess.senderId === user.id ? classes.senderMess : classes.recipiendMess
                        }
                    >{mess.body}</div>
                )
            })}
            <div className={classes.sendmess}>
                <input 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    placeholder='Введите сообщение'
                />
                <button 
                className={classes.button}
                onClick={() => {
                    sendMess()
                }}>Написать</button>
            </div>
        </div>
    )
}