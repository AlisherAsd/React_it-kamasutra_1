import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API, dialogsApi } from "../API/api";
import { getDialogsThunk } from "./dialogs-reducer";


export const getUserAuthThunk = createAsyncThunk(
    'authPage/getUserAuthThunk',
  
    async function(_, {dispatch}) {
        debugger
        API.getUserAuth().then(res => {  
            debugger
            dispatch(setLoading(true))  
            dispatch(setUserData(res.data.data))
            
            if (Object.keys(res.data.data).length != 0) {
                debugger
                dispatch(setIsAuth(true))

                API.selectedUser(res.data.data.id).then(res => {        
                    dispatch(setProfilePage(res.data))
                    dispatch(getDialogsThunk())
                    dispatch(setLoading(false)) 
                   
                })

               
            } else {

                dispatch(setIsAuth(false))
                dispatch(setLoading(false))
            }
        }).finally( dispatch(setLoading(false)) )
    }
)



export const updateAuthUsers = createAsyncThunk(
    'authPage/updateAuthUsers',
  
    async function(data, {dispatch}) {
        dispatch(setLoading(true))
        API.updateUsersAuthApi(data).then(res => { 
            if (res.data.resultCode === 0) {
                dispatch(setLoading(false))
                dispatch(saveChange(data))
            }
        })
    }
)

export const loginUserThunk = createAsyncThunk(
    'authPage/loginUserThunk',
  
    async function(data, {dispatch}) {
        debugger
        dispatch(setLoading(true))
        API.loginUserApi(data).then(res => {

            // if (res.data.resultCode === 10) {
            //     dispatch(setLoading(false))
            //     dispatch(getCaptchThunk())  
            // }
            debugger
            dispatch(getUserAuthThunk())
            window.location.reload()
        })
    }
)

export const logoutUserThunk = createAsyncThunk(
    'authPage/logoutUserThunk',
  
    async function(_, {dispatch}) {
        dispatch(setLoading(true))
        API.logoutUserApi().then(res => { 
            window.location.reload();
            dispatch(setProfilePage(null))
            dispatch(setLoading(false))
        })
    }
)

export const updateProfileThunk = createAsyncThunk(
    'authPage/updateProfileThunk',
  
    async function(data, {dispatch}) {
        dispatch(setLoading(true))
        API.updateProfileApi(data).then(res => { 
            dispatch(setLoading(false))
        })
    }
)


export const getCaptchThunk = createAsyncThunk(
    'authPage/getCaptchThunk',

    async function(_, {dispatch}) {
        
        dispatch(setLoading(true))
        API.getCaptchApi().then(res => { 
            dispatch(setLoading(false))
            dispatch(setCaptcha(res.data.url))
            
        })
    }
)



const initialState = {
    user: null,
    profilePage: null,
    isAuth: false,
    isLoading: true,
    captcha: null
}

export const authSlice = createSlice({
    name: 'authPage',
    initialState,
    reducers: {
        setUserData(state, action) {            
            state.user = action.payload
        },
        setProfilePage(state, action) {
            state.profilePage = action.payload
        },
        setIsAuth(state, action) {
            state.isAuth = action.payload
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },
        saveChange(state, action) {
            
            state.profilePage.contacts.github = action.payload.contacts.github
            state.profilePage.contacts.facebook = action.payload.contacts.facebook
            state.profilePage.contacts.vk = action.payload.contacts.vk
            state.profilePage.aboutMe = action.payload.aboutMe
            state.profilePage.lookingForAJobDescription = action.payload.lookingForAJobDescription
            state.profilePage.lookingForAJob = action.payload.lookingForAJob
        },
        setCaptcha(state, action) {
            state.captcha = action.payload
        }
    }
})

export const { setCaptcha, setLoading, saveChange, setUserData, setIsAuth, setProfilePage } = authSlice.actions
export default authSlice.reducer