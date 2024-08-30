import React from 'react';
import { NavLink } from 'react-router-dom';

export const Page_404 = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <h2>Not found page</h2>
            <p><NavLink to='/profile'>profile</NavLink></p>
            <p><NavLink to='/dialogs'>messages</NavLink></p>
            <p><NavLink to='/users'>users</NavLink></p>
            <p><NavLink to='/setting'>setting</NavLink></p>
            <p><NavLink to='/music'>music</NavLink></p>
            <p><NavLink to='/login'>login</NavLink></p>
        </div>
    );
};

