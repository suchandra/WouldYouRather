import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleSetAuthUser } from '../actions/auth';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    userDetails: PropTypes.array.isRequired,
    authUser: PropTypes.string,
    location: PropTypes.object,
  }

  static defaultProps = {
    authUser: null,
    location: null,
  }

  login = (e, id) => {
    const { dispatch } = this.props;
    dispatch(handleSetAuthUser(id));
  }

  render() {
    const {
      userDetails,
      authUser,
      location,
    } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };

    if (authUser !== null) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <div style={{margin: '0 auto',width: '40%',textAlign: 'center',fontSize: '20px'}}> Please Click a user to login.
        <ul style={{padding:'0px'}}>
          {userDetails
            .map(user => (
              <li
                key={user.userName}
                style={{ listStyleType: 'none' ,lineHeight: '60px', color: 'blue', cursor: 'pointer', textDecoration:'underline'}}
                onClick={e => this.login(e, user.userID)}
              >
                  {user.userName}

              </li>))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  const userDetails = Object.keys(users)
    .map((user) => {
      const tempUserDetails = {
        userName: users[user].name,
        userID: users[user].id,
      };
      return (tempUserDetails);
    });
  return {
    userDetails,
    authUser,
  };
}

export default (connect(mapStateToProps)(Login));
