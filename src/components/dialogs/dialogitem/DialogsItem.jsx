import { useDispatch } from 'react-redux'
import classes from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom'
import avatar_moke from '../../../assets/IMG/avatar_moke.jpg'



export const Dialog = (props) => {

    return (
        <div className={classes.dialog}>
            <div className={classes.dialog_item}>
                <img src={!props.photo ? avatar_moke : props.photo} />
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
                <p>Последняя активность: {props.lastUserActivityDate}</p>
                <p>Последнее сообщение: {props.lastDialogActivityDate}</p>
                {props.hasNewMessages ? <>&#9899;</> : <></>}
            </div>
        </div>
    )
}