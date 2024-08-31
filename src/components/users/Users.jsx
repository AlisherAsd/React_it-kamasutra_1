import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersItem from './useritem/UsersItem';
import { getUsersThunk, setCurrentPage, setSearch } from '../../redux/users-reducer'
import classes from './Users.module.css'
import Preloader from '../UI/preloader/Preloader'

export const Users = () => {
    
    const {users, pageSize, totalUsersCount, isLoading, currentPage} = useSelector(state => state.users)
    const [num, setNum] = useState(1)
    const [text, setText] = useState('')
    const [pag, setPag] = useState(true)
    
    const dispatch = useDispatch()

   
    if (isLoading) {
        return <Preloader />
    }

    const searchClick = (text) => {
        setPag(false)
        dispatch(getUsersThunk({currentPage, text}))
    }

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = num*10 - 10; i <= num*10; i++) {pages.push(i)}
   


    return (
        <div className={classes.container}>
        <div className={classes.search}>
            <input 
                placeholder='Найти пользователя'
                className={classes.input}
                onChange={e => setText(e.target.value)}
            />
            <button
                className={classes.button}
                onClick={() => {
                    searchClick(text)
                }}
            >Найти</button>
        </div>
        {pag ?
        <div className={classes.pagnation}>
            <a 
                style={{marginRight: 15}}
                onClick={() => num > 1 ? setNum(num - 1) : <></>
            }>&#9668;</a>
            {
                pages.map(num => {
                    if (num !== 0) {
                        return (
                            <span 
                                key={num}
                                className={currentPage === num ? classes.activePage : classes.Page}
                                onClick={() => dispatch(setCurrentPage(num))}
                        >{num}</span>
                        )   
                    }
                }) 
            
            }
            {
                <a
                    onClick={() => {
                        dispatch(setCurrentPage(5323))
                        setNum(5323)
                    }}
                >...{pagesCount}</a>
            }
            <a
                style={{marginLeft: 15}}
                onClick={() => num < pagesCount ? setNum(num + 1) : <></>}
            >&#9658;</a>
        </div>
        :
        <h3 style={{textAlign: 'center'}}>Найденные результаты</h3>
        }
        <div className={classes.users_list}>
            <ul>
            {   
                users.map(user => {
                    return (
                        <li>
                            < UsersItem user={user} key={user.id}/>
                        </li>
                    )
                } 
            )}
            </ul>
        </div>
        </div>
    )
};

