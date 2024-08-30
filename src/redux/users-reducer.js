import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../API/api"


export const getUsersThunk = createAsyncThunk(
  'usersPage/getUsersThunk',

  async function(data, {dispatch}) {

      	dispatch(setLoading(true))
      	API.getUsers(data.currentPage, 9, data.text).then(res => {

			dispatch(setUsers(res.data.items))
			dispatch(setTotalCount(res.data.totalCount))

			dispatch(setLoading(false))
		})
  }
)

export const followThunk = createAsyncThunk(
	'usersPage/followThunk',
	async function(id, {dispatch}) {

		
		API.followUserApi(id).then(res => {
            
            dispatch(setFollowisFetching(false))
            dispatch(setFollow(id))
        })
	}
)

export const unfollowThunk = createAsyncThunk(
	'usersPage/unfollowThunk',

	async function(id, {dispatch}) {

		API.unfollowUserApi(id).then(res => { 
			
            dispatch(setFollowisFetching(false))   
            dispatch(setUnfollow(id))
        })
	}
  )


let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    search: 'alishersharipovtol',
    followisFetching: false,
    isLoading: true
} 

export const usersReducer = createSlice ({
    name: 'usersPage',
    initialState,
    reducers: {
      setFollow(state, action) {
        state.users.map(user => {
            if (user.id === action.payload) {
                user.followed = false
                return user
            }
            return user
        })
      },
      setUnfollow(state, action) {
        state.users.map(user => {
            if (user.id === action.payload) {
                user.followed = true
                return user
            }
            return user
        })
      },
      setUsers(state, action) {
        state.users = [...action.payload]
      },
      setTotalCount(state, action) {
        state.totalUsersCount = action.payload
      },
      setCurrentPage(state, action) {
        state.currentPage = action.payload
      },
      setFollowisFetching(state) {
        const Boolstate = state.followisFetching 
        state.followisFetching = !Boolstate 
      },
	    setLoading(state, action) {
        state.isLoading = action.payload  
      },
      setSearch(state, action) {
        state.search = action.payload  
      },
    },
   
})

export const { setSearch, setLoading, setFollowisFetching, setFollow, setUnfollow, setUsers, setTotalCount, setCurrentPage } = usersReducer.actions
export default usersReducer.reducer