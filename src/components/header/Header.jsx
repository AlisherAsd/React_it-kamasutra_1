import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import t from '../../Theme.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserThunk } from '../../redux/auth-reducer'
import Preloader from '../UI/preloader/Preloader'
import avatar_moke from '../../assets/IMG/avatar_moke.jpg'
import logout from '../../assets/IMG/logout.svg'

export const Header = () => {

    const dispatch = useDispatch()

    const {user, isAuth, isLoading, profilePage} = useSelector(state => state.authUser)
    const light = useSelector(state => state.setting.light)
 
    
    if (isLoading) {
        return <Preloader />
    }
      
    const logout = () => {
        dispatch(logoutUserThunk())
    }

    let styleTheme = ''
    if (light) {
        styleTheme = classes.header + ' ' + t.Light_header
    } else {
        styleTheme = classes.header + ' ' + t.Dark_header
    }
    

    return (
        <header className={styleTheme}>
      
            <img src='https://sun9-5.userapi.com/s/v1/ig2/eRHLi1nRsgyWiFP62lKccv8iFeq2TWU1CRb9eTzprgEVMrAnYiUpeVZthnVfR2vtXmGtrEebrko4GEM6ZbLvyPUL.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&from=bu&u=vehVRejYuBDzrUaqkhlGx5VVKYENl6jr24NjhhG4eKc&cs=320x320'/>
            <div className={classes.loginBlock}>
                {!isAuth ? 
                    <NavLink to={'/login'}>
                        <img src='https://www.svgrepo.com/show/43426/profile.svg' 
                        />
                    </NavLink>
                    :
                    <div className={classes.log}>
                        <NavLink to={'/profile'}>
                            <img src={!profilePage.photos.small ?  avatar_moke : profilePage.photos.small}/>
                        </NavLink>
                        <NavLink
                            onClick={ () => logout()} 
                            to={'/profile'}
                        >
                            <img src='https://www.reshot.com/preview-assets/icons/HRAN56DF7J/user-logout-HRAN56DF7J.svg'
                             style={{height: 50, borderRadius: 0}}/>
                        </NavLink>
                        
                    </div>
                }      
            </div>
        </header>
    )
}