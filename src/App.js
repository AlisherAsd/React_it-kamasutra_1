import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import t from './Theme.module.css'
import { Dialogs } from './components/dialogs/Dialogs';
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/Profile'
import { Setting } from './components/setting/Setting'
import { News } from './components/news/News'
import { Users } from './components/users/Users';
import SelectedUser from './components/users/selecteduser/SelectedUser';
import Login from './components/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthThunk } from './redux/auth-reducer';
import { useEffect } from 'react';
import { getUsersThunk } from './redux/users-reducer';
import { Page_404 } from './components/errorspage/404/Page_404'
import { Message } from './components/dialogs/message/Message';
import SelectedNews from './components/news/selectednews/SelectedNews';

const App = (props) => {
  

  const dispatch = useDispatch()
  const {currentPage, search} = useSelector(state => state.users)
  const {isAuth} = useSelector(state => state.authUser)
  debugger
  
    const light = useSelector(state => state.setting.light)
    let styleTheme = ''
    if (light) {
        styleTheme = 'app-wrapper' + ' ' + t.Light_bg
    } else {
        styleTheme = 'app-wrapper' + ' ' + t.Dark_bg
    }


  
  useEffect(() => {
     dispatch(getUserAuthThunk())
  }, [])

  
  useEffect(() => {
      dispatch(getUsersThunk({currentPage, text: ''}))
  }, [currentPage])

  
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div className={styleTheme}>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
              <Routes>

                <Route path="/dialogs" element={ <Dialogs /> } />

                <Route path="/profile" element={ <Profile /> } />

                <Route path="/login" element={ <Login /> } />

                <Route path="/news" element={ <News /> } />

                <Route path="/news/:id" element={ <SelectedNews /> } />

                <Route path="/users" element={ <Users /> } />

                <Route path="/users/:id" element={ <SelectedUser /> } />

                <Route path="/setting" element={ < Setting /> } />

                <Route path="/dialogs/:id" element={ < Message /> } />

                <Route path="*" element={ <Page_404 />}/>

              </Routes>
            </div>
        </div>
    </HashRouter>
  );
}

export default App
