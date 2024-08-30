import React, { useEffect, useState } from 'react';
import classes from './UsersItem.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { followThunk, setFollow, setFollowisFetching, setUnfollow, unfollowThunk } from '../../../redux/users-reducer';
import avatar_moke from '../../../assets/IMG/avatar_moke.jpg'
import { NavLink } from 'react-router-dom';


const UsersItem = ({user}) => {

    const dispatch = useDispatch()  
    const [isFollow, setIsFollow] = useState(user.followed)
    const {followisFetching} = useSelector(state => state.users)
    const {isAuth} = useSelector(state => state.authUser)

       

    const setFollowClick = () => {
        dispatch(setFollowisFetching(true))
        dispatch(followThunk(user.id))   
        setIsFollow(true)
    }
    const setUnfollowClick = () => {
        dispatch(setFollowisFetching(true))
        dispatch(unfollowThunk(user.id))  
        setIsFollow(false)
    }

    return (
        <div className={classes.user}>
            {followisFetching}
            <NavLink to={'/users/' + user.id}>
                <img src={!user.photos.small ?  avatar_moke : user.photos.small}/>
            </NavLink>

            <h3>
                {user.name}
                {/* {user.location.country} */}
            </h3>
            <p>
                {user.status}
                {/* {user.location.city} */}
            </p>
            <div>
                { isFollow && isAuth ? 
                    <button
                        className={classes.button}
                        disabled={followisFetching}
                        onClick={setUnfollowClick}
                    >Подписаться</button>
                : <></>
                }
                { !isFollow && isAuth ? 
                    <button
                        className={classes.button}
                        disabled={followisFetching}
                        onClick={setFollowClick}
                    >Отписаться</button>
                : <></>
                }
            </div>
        </div>
    );
};

export default UsersItem;