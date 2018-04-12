import React from 'react';
import LoginComponent from './../components/loginComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import logo from "../logo.svg";

export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    changeHandler = (e) => {
        debugger;
        const {credentials} = this.state;
        credentials[e.target.id] = e.target.value;
        this.setState({credentials});
    };

    loginHandler=()=> {
        debugger;
        this.props.loginAction(this.state.credentials);
    };
    alertMethod=()=>{
      alert('alert!@!');
    };

    render() {
        debugger;

        return this.props.authentication.isLoading ?  <img src={logo} className="App-logo" alt="logo" />
            :(<div><LoginComponent changeHandler={this.changeHandler} loginHandler={this.loginHandler} credentials={this.state.credentials} />
                <button id={'alertBtn'} onClick={this.alertMethod}>alert</button>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginAction: (payload) => {
            return {type: 'login', payload}
        }
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);