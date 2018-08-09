import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logOut } from '../actions/auth';
import AddButton from './view/AddButton'

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
      authUserID,
      authUserURL,
      authUserName
    } = this.props;

    return (
        <div>
          <div style={{float:'right'}}>
            <img src={authUserURL} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
            <div>{authUserName}</div>
          </div>
          {authUserID ?
            <div style={{borderRight:'1px solid #000',width:'15%',float:'left',height:'800px'}}>
              <Link to="/add"><AddButton /></Link>
               <div id="menu-appbar" >
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '30px', fontSize:'20px' }} >Home</div>
                </Link>
                <Link to="/leaderboard" style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '30px', fontSize:'20px' }} >Leaderboard</div>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '30px', fontSize:'20px' }} onClick={this.handleLogOut}>Logout</div>
                </Link>
              </div>
            </div>:
            <div style={{backgroundColor: '#ef1d03',color: '#fff',width: '20%',margin: '30px auto', textAlign: 'center'}}>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '30px', fontSize:'30px',color:'#fff' }}>Login</div>
              </Link>
            </div>}
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
