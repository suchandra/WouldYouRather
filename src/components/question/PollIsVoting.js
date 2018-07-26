import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleRegisterVote } from '../../actions/questions';

class PollIsVoting extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };

  state = {
    toDetails: false,
  };

  handleOptionOne = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const option = 'optionOne';
    const userVote = { id, option };
    dispatch(handleRegisterVote(userVote));
    setTimeout(() => this.setState({
      toDetails: true,
    }), 500);
  }

  handleOptionTwo = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const option = 'optionTwo';
    const userVote = { id, option };
    dispatch(handleRegisterVote(userVote));
    setTimeout(() => this.setState(() => ({
      toDetails: true,
    })), 500);
  }

  render() {
    const cardStyles = {
      height: 50,
      width: '46%',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      float: 'left',
      backgroundColor: '#bdbdbd',
      lineHeight: '48px',
      color: '#fff',
      cursor: 'pointer',
      borderRight:'15px solid #fff'
    };
    const { id } = this.props;
    const { toDetails } = this.state;

    if (toDetails === true) {
      return <Redirect to={`/questions/${id}/details`} />;
    }

    return (
      <div>
        <div style={cardStyles}>
          <div style={{ width: '50%' }} color="primary" onClick={this.handleOptionOne} >
            Vote Option One
          </div>
        </div>
        <div style={cardStyles}>
          <div style={{ width: '50%' }} color="primary" onClick={this.handleOptionTwo} >
            Vote Option Two
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(PollIsVoting);
