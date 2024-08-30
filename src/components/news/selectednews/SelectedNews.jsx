import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Preloader from '../../UI/preloader/Preloader';
import classes from './SelectedNews.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsByIdThunk, getPostsByIdApiThunk } from '../../../redux/posts-reducer';

const SelectedNews = () => {


    const {comments, selectedPost} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const {pathname} = useLocation()
    const id = pathname.split('/')[2]

    useEffect(() => {
        dispatch(getCommentsByIdThunk(id))
        dispatch(getPostsByIdApiThunk(id))
    }, [])

    console.log(id);
    
    if (!comments || !selectedPost) {
        return <Preloader />
    }

    return (
        <div className={classes.snews}>
            <div className={classes.content}>
                <h1>{selectedPost.title}</h1>
                <h4>{selectedPost.body}</h4>
            </div>
            <h4>Комментарии</h4>
            {
                comments.map(comm => {
                    return (
                        <div className={classes.comm}>
                        <NavLink to={`/users/${comm.id}`}>
                            <h3>{comm.email}</h3>
                            <p>{comm.body}</p>
                        </NavLink>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SelectedNews;