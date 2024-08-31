import React, { useState } from 'react'
import classes from './MyPosts.module.css'
import { Post } from './Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../../../redux/profile-reducer';

export const MyPosts = () => {
  
    const posts = useSelector(state => state.profile.posts);
    
    const dispatch = useDispatch()
    const [text, setText] = useState('it-kamasutra')
    
    let PostsData = posts.map( (el) => { return <Post message={el.message} likeCount={el.likesCount} key={el.id} /> } )
    
    
    const AddPost = () => {
        dispatch(ADD_POST(text))
        setText('')
    }

    return (
        <div className={classes.content}>
            <div>
                <h3>My post</h3>
              
            </div>
            <div>
                <div>
                    <textarea 
                    onChange={e => setText(e.target.value)}
                    value={text}
                    />
                </div>
                <div>
                    <button onClick={ AddPost }>Add post</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                new post
            </div>
            <div>
                <div className='posts'>
                    
                    { PostsData }

                </div>
            </div>
        </div>
    )
}