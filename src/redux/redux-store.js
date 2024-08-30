import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import postsReducer from "./posts-reducer";
import settingReducer from "./setting-reducer";


let store = configureStore({
    reducer: {
        profile: profileReducer,
        dialogs: dialogsReducer,
        users:  usersReducer,
        authUser: authReducer,
        posts: postsReducer,
        setting: settingReducer
    }
}) 

export default store