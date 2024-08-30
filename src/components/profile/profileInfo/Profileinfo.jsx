import { ProfileInfoTrue } from './profileInfoTrue/ProfileinfoTrue'
import { ProfileInfoFalse } from './profileInfoFalse/ProfileinfoFalse'
import { useState } from 'react'

export const ProfileInfo = () => {

    const [settingProfile, setSettingProfile] = useState(false)



    return (
        <>
            {
                !settingProfile ? 
                    <>
                        <ProfileInfoTrue /> 
                        <button
                            onClick={() => setSettingProfile(true)}
                        >Изменить профиль</button>
                    </>
                : 
                    <>
                        <ProfileInfoFalse />
                        <button
                            onClick={() => setSettingProfile(false)}
                        >Закрыть</button>
                    </>
            }  
        </> 
    )
}