import { useSelector } from 'react-redux'
import classes from './Profileinfo.module.css'
import Preloader from '../../../UI/preloader/Preloader'
import avatar_moke from '../../../../assets/IMG/avatar_moke.jpg'
import { NavLink } from 'react-router-dom'

export const ProfileInfoTrue = () => {

    const {profilePage} = useSelector(state => state.authUser)

if (!profilePage) {
        return <Preloader />
    }
    
    return (
        <div className={classes.content}>
            <div className={classes.profile_page}>
                <div>
                    <img src={!profilePage.photos.large ?  avatar_moke : profilePage.photos.large}/>
                </div>
                <div className={classes.info}>
                    <h4>Информация</h4>
                    <h1>{profilePage.fullName}</h1>
                    <h5>Статус:</h5>
                    <p>{profilePage.aboutMe}</p>
                </div>
            </div>
            <div className={classes.contacts}>
                <h4>Конакты</h4>
                <p><a href={profilePage.contacts.facebook}>Facebook</a></p>
                <p><a href={profilePage.contacts.vk}>ВК</a></p>
                <p><a href={profilePage.contacts.github}>Github</a></p>
            </div>
            <div className={classes.works}>
                <h4>Работа</h4>
                <p>{profilePage.lookingForAJob ? 'Ищет работу' : 'Не ищет работу'}</p>
                <p>{profilePage.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}