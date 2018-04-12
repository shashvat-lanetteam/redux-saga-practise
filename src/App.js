import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {BrowserRouter, Switch, Redirect,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './App.css';
import Login from './container/Login';
import Home from './container/Home';

class App extends Component {
    componentDidCatch(err,errInfo) {
        debugger;
        alert('CAUGHT ERROR IN COMPONENT');
        console.log(err,errInfo);
    }
    render() {
        debugger;
        const PrivateRouter = (props) => {
            return (
                this.props.authentication.user ?
                    <Route {...props} /> :
                    <Redirect to={'/login'}/>
            )
        };
        const PublicRouter = (props) => {
            return (
                !this.props.authentication.user ?
                    <Route {...props} /> :
                    <Redirect to={'/'}/>
            )
        };

        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <PrivateRouter exact path={'/'} component={Home} />
                        <PublicRouter exact path={'/login'} component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {authentication: state.authentication}
};
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));