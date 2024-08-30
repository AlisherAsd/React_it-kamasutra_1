import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/setting-reducer';

export const Setting = () => {

    const dispatch = useDispatch()
    const light = useSelector(state => state.setting.light)


    return (
        <div style={{minHeight: 700, padding: 50}}>
            <h1>Setting</h1>
            <h2>Выберете тему</h2>
            <h4>Выбрана { light ? 'светлая' : 'темная'} тема</h4>
            <button
                onClick={() => dispatch(changeTheme(false))}
            >Черная</button>
            <button
               onClick={() => dispatch(changeTheme(true))}
            >Светлая</button>
        </div>
    )
}