import React from 'react';

const HomeComponent = (props) => {
    return (
        <div>
        <center>
            <h1>HOME</h1>
        </center>
        <button onClick={() =>{props.getUser(props.userData)}}>Set User</button>
        <button onClick={props.logoutHandler}>Logout</button>
    </div>
    )
};
export default HomeComponent;