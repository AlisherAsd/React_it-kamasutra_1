import { useSelector } from 'react-redux'
import { MyPosts } from './MyPost/MyPosts'
import { ProfileInfo } from './profileInfo/Profileinfo'
import RedirectToLogin from '../UI/redirecttoogin/RedirectToLogin'

export const Profile = () => {

    const {isAuth} = useSelector(state => state.authUser)

    if (!isAuth) {
        return <RedirectToLogin />
    }

    return (
        <>
            <ProfileInfo /> 
            <MyPosts />
        </>
    )
}