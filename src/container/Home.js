import React from 'react';
import HomeComponent from '../components/homeComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                fname: "fname",
                lname: "lname "
            }
        }
    }

    render() {
        return (
            <div>
                <HomeComponent logoutHandler={this.props.logoutAction}
                               getUser={this.props.getUser}
                               userData={this.state.user}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logoutAction: () => {
            return {type: 'logout'}
        },
        getUser: (data) => {
            return {type: 'getUser', payload: data}
        }
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);