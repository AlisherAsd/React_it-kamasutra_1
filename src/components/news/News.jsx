import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import Preloader from "../UI/preloader/Preloader"
import { useDispatch, useSelector } from "react-redux"
import { getPostsThunk } from "../../redux/posts-reducer"
import classes from './News.module.css'


export const News = () => {

    const {posts} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    debugger

    useEffect(() => {
        dispatch(getPostsThunk())
    }, [])

    if(!posts) {
        return (
            <Preloader />
        )
    }

   
    return (
        <div className={classes.News_Conatiner}>
            <h1>Новости</h1>
            {
                posts.map(post => {
                    
                    return (
                        <div className={classes.News}>
                                <NavLink 
                                    to={'/news/' + post.userId}
                                >
                                    <h4>{post.title}</h4>
                                    <p>{post.title}</p>
                                </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}