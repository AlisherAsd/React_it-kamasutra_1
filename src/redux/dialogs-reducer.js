import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API, dialogsApi } from "../API/api"



export const getDialogsThunk = createAsyncThunk(
    'authPage/getDialogsThunk',
  
    async function(_, {dispatch}) {

        dialogsApi.getAllDialogs().then(res => {
            try {
                dispatch(setDialogs(res.data))
            } catch(err) {
                console.log(err);
            }            
        })
    }
)

export const getDialogsWithIDThunk = createAsyncThunk(
    'authPage/getDialogsWithIDThunk',
  
    async function(id, {dispatch}) {

        dialogsApi.getDialogsWithIDApi(id).then(res => {
            dispatch(setMessages(res.data.items))
        })
    }
)

export const sendMessageIDThunk = createAsyncThunk(
    'authPage/sendMessageIDThunk',
  
    async function({id, text}, {dispatch}) {

        dialogsApi.sendMessageApi({id, text}).then(res =>  {
            dispatch(getDialogsWithIDThunk(id))
        })
    }
)




let initialState = {
    dialogs: [
    ],
    messages: [
    ],
    newMessageBody: ''
} 

export const dialogsReducer = createSlice ({
    name: 'profilePage',
    initialState,
    reducers: {
        UPDATE_NEW_MESSAGE_BODY(state, action)  {
            state.newMessageBody = action.payload;
        },
        SEND_MESSAGE(state, action) {
            state.messages.push({id: 6, message: action.payload})
        },
        setMessages(state, action) {
            state.messages = [...action.payload]
        },
        setDialogs(state, action) {
            state.dialogs = [...action.payload]
        },
    }
})

export const { setDialogs, UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE, setMessages } = dialogsReducer.actions
export default dialogsReducer.reducer