import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import t from '../../Theme.module.css'
import { useSelector } from 'react-redux'

export const Navbar = () => {

    const light = useSelector(state => state.setting.light)
    let styleTheme = ''
    if (light) {
        styleTheme = classes.nav + ' ' + t.Light_navbar
    } else {
        styleTheme = classes.nav + ' ' + t.Dark_navbar
    }

    return (
        <nav className={styleTheme}>
          <div className={classes.item}>
            <NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/dialogs' className = { navData => navData.isActive ? classes.active : classes.item }>Messanges</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/news' className = { navData => navData.isActive ? classes.active : classes.item } >News</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/users' className = { navData => navData.isActive ? classes.active : classes.item }>Users</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/setting' className = { navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
          </div>    
        </nav>
    )
}