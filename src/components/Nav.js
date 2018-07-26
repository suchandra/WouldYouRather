import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logOut } from '../actions/auth';

class Nav extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    authUserURL: PropTypes.string.isRequired,
    authUserID: PropTypes.string.isRequired,
    authUserName: PropTypes.string.isRequired
  };


  handleLogOut = () => {
    this.props.dispatch(logOut());
  }

  render() {
    const {
      authUserID
    } = this.props;

    return (
        <div style={{width:'15%',float:'left'}}>
          <div style={{borderRight:'1px solid #000'}}>
            <div id="menu-appbar" >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '30px', fontSize:'20px' }} >Home</div>
              </Link>
              <Link to="/leaderboard" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '30px', fontSize:'20px' }} >Leaderboard</div>
              </Link>
              {authUserID ?
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '30px', fontSize:'20px' }} onClick={this.handleLogOut}>Logout</div>
                </Link> :
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '30px', fontSize:'20px' }}>Login</div>
                </Link>}
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  if (authUser !== null) {
    const loggedUser = users[authUser];
    return {
      authUserURL: loggedUser.avatarURL,
      authUserID: loggedUser.id,
      authUserName: loggedUser.name,
    };
  }
  return {
    authUserURL: '',
    authUserID: '',
    authUserName: '',
  };
}

export default (connect(mapStateToProps)(Nav));
