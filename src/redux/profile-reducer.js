import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../API/api"



export const selectedUserThunk = createAsyncThunk(
    'profilePage/selectedUserThunk',
  
    async function(id, {dispatch}) {
  
        API.selectedUser(id).then(res => {

            dispatch(setUserProfile(res.data))
        })
    }
)




let initialState = {
    setUserProfile: {
        "aboutMe": "",
        "contacts": {
          "facebook": "",
          "website": null,
          "vk": "",
          "twitter": "",
          "instagram": "",
          "youtube": null,
          "github": "",
          "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "",
        "fullName": "",
        "userId": null,
        "photos": {
          "small": "",
          "large": ""
        }
      },
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
}

export const profileReducer = createSlice ({

    name: 'profilePage',
    initialState,
    reducers: {
        ADD_POST(state, action) {
            let newPost = {
                id: 5,
                message: action.payload,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
        },
        UPDATE_NEW_POST_TEXT(state, action) {
            state.newPostText = action.payload;
        },
        setUserProfile(state, action) {
            state.setUserProfile = action.payload
        }
    }
})

export const { ADD_POST, UPDATE_NEW_POST_TEXT, setUserProfile } = profileReducer.actions
export default profileReducer.reducer