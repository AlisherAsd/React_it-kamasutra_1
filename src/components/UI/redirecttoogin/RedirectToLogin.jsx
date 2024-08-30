import React from 'react';
import { NavLink } from 'react-router-dom';

const RedirectToLogin = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Вы еще не вошли!</h1>
            <h3>Пожалуйста войдите или зарегестрируетесь!</h3>
            <NavLink to={'/login'}>Войти</NavLink>
        </div>
    );
};

export default RedirectToLogin;