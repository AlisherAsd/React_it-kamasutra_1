import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../../redux/auth-reducer';


const Login = () => {

    const dispatch = useDispatch()
    const {captcha} = useSelector(state => state.authUser) 
 
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Login</h1>
            <h3>Войдите чтобы общаться с друзьями и подписываться на них!</h3>
            <div style={{width: 140}}>
                <Formik
                style={{textAlign: 'center'}}
                initialValues={{ email: '', password: '', rememberMe: false}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = '';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                   
                    
                    dispatch(loginUserThunk(values))
                    // window.location.reload()
                    setSubmitting(false);
                  
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder='Введите ваш email'
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder='Введите ваш пароль'
                    />
                    {errors.password && touched.password && errors.password}
                  
                    <label style={{display: 'flex'}}>
                        <input 
                            type="checkbox"
                            name="rememberMe"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.rememberMe}
                        />
                        <h4>remember me</h4>
                    </label>

                    <p
                        style={{fontSize: 10, fontWeight: 600}}
                    >Если вы используете ios для успешной работы сайт ипользуете third party cookie </p>
                    <button type="submit" disabled={isSubmitting}>
                        <a style={{color: 'black'}}
                        >Войти</a>
                    </button>
                    {captcha ? 
                        <>
                            <img src={captcha} />
                            <input 
                                name="captcha"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.captcha}
                            />
                        </>
                        :
                        <></>
                    }
                    </form>
                )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;