import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './SelectedUser.module.css'
import { selectedUserThunk } from '../../../redux/profile-reducer';
import avatar_moke from '../../../assets/IMG/avatar_moke.jpg'
import { useLocation } from 'react-router-dom';
import { sendMessageIDThunk } from '../../../redux/dialogs-reducer';
import Preloader from '../../UI/preloader/Preloader';

const SelectedUser = () => {


    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const path = pathname.split('/')
    const id = path[2]

    useEffect(() => {
        dispatch(selectedUserThunk(id))
    }, [])

    const user = useSelector(state => state.profile.setUserProfile)
    const {isAuth} = useSelector(state => state.authUser)

    const [text, setText] = useState('')
    const sendMess = () => {
        dispatch(sendMessageIDThunk({id, text}))
        setText('')
    }
    
    if (!user) {
        return <Preloader />
    }

    return (
        <div className={classes.content}>
            <div className={classes.profile_page}>
                <img src={!user.photos.large ?  avatar_moke : user.photos.large}/>
                <div className={classes.info}>
                    <h4>Информация</h4>
                    <h1>{user.fullName}</h1>
                    <p>{user.aboutMe}</p>
                </div>
            </div>
            { isAuth ? 
                <>
                 <input 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    className={classes.input}
                    placeholder='Написать пользователю'
                />
                <button 
                    className={classes.button}
                    onClick={() => {
                    sendMess()
                }}>Написать</button>
                </>
                :
                <p style={{marginTop: 20}}>Войдите чтобы написать пользователю</p>
            }
           
            <div className={classes.contacts}>
                <h4>Конакты</h4>
                <p><a href={user.contacts.facebook}>Facebook</a></p>
                <p><a href={user.contacts.vk}>ВК</a></p>
                <p><a href={user.contacts.github}>Github</a></p>
            </div>
            <div className={classes.works}>
                <h4>Работа</h4>
                <p>{user.lookingForAJob ? 'Ищет работу' : 'Не ищет работу'}</p>
                <p>{user.lookingForAJobDescription}</p>
            </div>

        </div>

    );
};

export default SelectedUser;