import { useDispatch, useSelector } from 'react-redux'
import classes from './Profileinfo.module.css'
import Preloader from '../../../UI/preloader/Preloader'
import avatar_moke from '../../../../assets/IMG/avatar_moke.jpg'
import { useState } from 'react'
import { followThunk, setFollowisFetching, unfollowThunk } from '../../../../redux/users-reducer'
import { saveChange, updateAuthUsers, updateProfileThunk } from '../../../../redux/auth-reducer'

export const ProfileInfoFalse = () => {

    const {profilePage} = useSelector(state => state.authUser)
    
    const dispatch = useDispatch()  

    const [fullname, setFullname] = useState(profilePage.fullName)
    const [aboutyou, setAboutyou] = useState(profilePage.aboutMe)
    const [facebook, setFacebook] = useState(profilePage.facebook)
    const [vk, setVk] = useState(profilePage.contacts.vk)
    const [github, setGithub] = useState(profilePage.github)
    const [job, setJob] = useState(profilePage.lookingForAJobDescription)
    const [jobbool, setJobbool] = useState(profilePage.lookingForAJob)
    const [loading, setLoading] = useState(null)
    const [img, setImg] = useState(null)

    const load = useSelector(state => state.authUser.isLoading)
    
    const saveChangeClick = () => {

        setLoading(true)
        dispatch(updateAuthUsers(
            {
                lookingForAJob: jobbool, 
                AboutMe: aboutyou,
                LookingForAJobDescription: job,
                fullName: fullname,
                contacts: {
                    github, 
                    vk,
                    facebook
                }
            }
        ))
        if (img) {
            const formData = new FormData()
            formData.append("image", img.target.files[0])
            dispatch(updateProfileThunk(formData))
        }    
    }

    if (!profilePage) {
        return <Preloader />
    }
    if (load) {
        return <Preloader />
    }
    if (!load && loading)
        return <h1>Сохранения изменены</h1>

    
    
    return (
        <div className={classes.content}>
            <div className={classes.profile_page}>
                Фото: 
                <input type='file' 
                    onChange={e => setImg(e)}
                />
                <div>
                    <h4>Информация</h4>
                    <h5>Fullname
                        <input 
                            onChange={e => setFullname(e.target.value)}
                            value={fullname}
                        />
                    </h5>
                    <p>About you
                        <input 
                            placeholder='Обязательное поле'
                            onChange={e => setAboutyou(e.target.value)}
                            value={aboutyou}
                        />
                    </p>
                    <h4>Конакты</h4>
                    <p>facebook
                        <input 
                            placeholder='https://'
                            onChange={e => setFacebook(e.target.value)}
                            value={facebook}
                        />
                    </p>
                    <p>vk
                        <input 
                            placeholder='https://'
                            onChange={e => setVk(e.target.value)}
                            value={vk}
                        />
                    </p>
                    <p>github 
                        <input 
                            placeholder='https://'
                            onChange={e => setGithub(e.target.value)}
                            value={github}
                        />
                    </p>
                </div>
                <div>
                    <h4>Работа</h4>
                    <p>Ищете работу? 
                        {jobbool ? 
                            <button
                                
                                onClick={() => setJobbool(false)}
                            >ДА</button>
                            : 
                            <button
                                
                                onClick={() => setJobbool(true)}
                            >НЕТ</button>
                        }
                    </p>
                    <p>Опишите работу
                        <input 
                            placeholder='Обязательное поле'
                            onChange={e => setJob(e.target.value)}
                            value={job}
                        />   
                    </p>
                </div>
            </div>
            <button
                onClick={() => saveChangeClick()}
            >Сохранить изменения</button>
        </div>
    )
}