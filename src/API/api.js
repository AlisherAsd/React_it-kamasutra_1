import axios from "axios"

const baseurl = `https://social-network.samuraijs.com/api/1.0`

const apikey_testacc = '6beaa4d4-aa5d-44d7-8e91-a8e714df9125' 

export const API = {

    getUserAuth() {
        return axios.get(`${baseurl}/auth/me`, {
                withCredentials: true,
        })
    },
    
    getUsers(currentPage, pageSize, text) {
        return axios.get(`${baseurl}/users?page=${currentPage}&count=${pageSize}&term=${text}`, {
            withCredentials: true
        })
    },

    
    selectedUser(id) {
        return axios.get(`${baseurl}/profile/${id}`)
    },
    
    followUserApi(id) {
        return axios.post(`${baseurl}/follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": apikey_testacc
            }
        })
    },
    
    unfollowUserApi(id) {
        return axios.delete(`${baseurl}/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": apikey_testacc
            }
        })
    },

    updateUsersAuthApi(data) {
        return axios.put(`${baseurl}/profile`, data,  {
            withCredentials: true,
            headers: {
                "API-KEY": apikey_testacc
            }
        })
    },

    loginUserApi(data) {
        return axios.post(`${baseurl}/auth/login`, data, {
            withCredentials: true,
            headers: {
                "API-KEY": apikey_testacc
            }
        })
    },

    logoutUserApi() {
        return axios.delete(`${baseurl}/auth/login`,  {
            withCredentials: true,
            headers: {
                "API-KEY": apikey_testacc
            }
        })
    },

    updateProfileApi(data) {
        return axios.put(`${baseurl}/profile/photo`, data, {
            withCredentials: true,
            headers: {
                "API-KEY": apikey_testacc,
                "Content-Type": "multipart/form-data"
            }
        })
    },

    getCaptchApi() {
        return axios.get(`${baseurl}/security/get-captcha-url`)
    }
}


export const dialogsApi = {
    getDialogsWithIDApi(id) {
        return axios.get(`${baseurl}/dialogs/${id}/messages`, {
                withCredentials: true,
                headers: {
                    "API-KEY": apikey_testacc
                }
        })
    },
    getAllDialogs() {
        return axios.get(`${baseurl}/dialogs/`, {
            withCredentials: true,
        })
    },
    sendMessageApi({id, text}) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/dialogs/${id}/messages`, {body: text}, {
            withCredentials: true,
            headers: {
                "API-KEY": apikey_testacc
            }
        })
    },
   
}


export const postsApi = {
    getPostsApi() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    }, 
    getCommentsById(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    },
    getPostsByIdApi(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }, 
}