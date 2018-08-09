import React from 'react';
import Feed from './Feed';
import { connect } from 'react-redux'

class NavTabs extends React.Component {
  static propTypes = {
  };

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    value = parseInt(event.currentTarget.getAttribute('value'))
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const {
      authUserID
    } = this.props;

    return (
      <div style={{width:'80%',float:'left'}}>
        {authUserID &&
          <div>
            <div style={{padding:'40px 0'}} >
              <div onClick={this.handleChange} value="0" style={{'borderBottom': this.state.value === 0 ? '1px solid black': 'none',cursor:'pointer', width:'48%',float:'left',textAlign:'center'}}>UNANSWERED</div>
              <div onClick={this.handleChange} value="1" style={{'borderBottom': this.state.value === 1 ? '1px solid black': 'none',cursor:'pointer', width:'48%',float:'left',textAlign:'center'}}>ANSWERED</div>
            </div>
            <Feed answered={value} />
          </div>
        }
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

export default (connect(mapStateToProps)(NavTabs));