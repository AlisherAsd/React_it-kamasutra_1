import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postsApi } from "../API/api"


export const getPostsThunk = createAsyncThunk(
    'postsPage/getPostsThunk',
  
    async function(_, {dispatch}) {

        postsApi.getPostsApi().then(res => {
            dispatch(setPosts(res.data))
        })
    }
)

export const getCommentsByIdThunk = createAsyncThunk(
    'postsPage/getCommentsByIdThunk',
  
    async function(id, {dispatch}) {

        postsApi.getCommentsById(id).then(res => {
            dispatch(setComments(res.data))
        })
    }
)

export const getPostsByIdApiThunk = createAsyncThunk(
    'postsPage/getPostsByIdApiThunk',
  
    async function(id, {dispatch}) {

        postsApi.getPostsByIdApi(id).then(res => {
            dispatch(setSelectedPost(res.data))
        })
    }
)



const initialState = {
    posts: null,
    comments: null,
    selectedPost: null
}

export const postsSlice = createSlice({
    name: 'postsPage',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload
        },
        setComments(state, action) {
            state.comments = action.payload
        },
        setSelectedPost(state, action) {
            state.selectedPost = action.payload
        }
    }
})

export const { setSelectedPost, setPosts, setComments } = postsSlice.actions
export default postsSlice.reducer