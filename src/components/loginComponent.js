import React from 'react';

const LoginComponent = (props) => {
    return (
        <div>
            <center>
                <h1>LOGIN</h1>
                Username:
                <input
                    id={'username'}
                    type={'text'}
                    name={'username'}
                    onChange={props.changeHandler}
                    placeholder={'enter username'}
                    value={props.credentials.username}
                /><br/>
                Password:
                <input
                    id={'password'}
                    type={'password'}
                    name={'password'}
                    onChange={props.changeHandler}
                    placeholder={'enter password'}
                    value={props.credentials.password}
                /><br/>
                <button
                    onClick={props.loginHandler}
                >Login
                </button>
                {' '}
                <button>signup</button>
            </center>
        </div>
    )
};
export default LoginComponent;
