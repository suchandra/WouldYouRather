import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeedLink from './FeedLink';
import PollIsVoting from './PollIsVoting';
import PollDetails from './PollDetails';

class Question extends Component {
  static propTypes = {
    questions: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'UserWillVote',
      'UserDidVote',
      'PollIsVoting',
      'PollDetails',
    ]).isRequired,
  };

  state = {
    status: this.props.status,
  }

  renderActions() {
    const { status } = this.state;
    const { id } = this.props;

    switch (status) {
      case 'UserDidVote':
        return (
          <FeedLink id={id} status={status}/>
        );
      case 'PollIsVoting':
        return (
          <PollIsVoting id={id} />
        );
      case 'PollDetails':
        return (
          <PollDetails id={id} />
        );
      default:
        return (
          <FeedLink id={id} status={status} />
        );
    }
  }
  render() {
    const { questions, id } = this.props;
    const optionOne = questions[id].optionOne.text;
    const optionTwo = questions[id].optionTwo.text;

    return (
      <div>
        <div style={{ width: '35%', margin: '40px auto 40px auto' }}>
          <div style={{ width: '40%' , float:'left' }}>{optionOne}</div>
          <div style={{width:'5%', float:'left', padding:'35px'}}>OR</div>
          <div style={{ width: '40%' , float:'left' }}>{optionTwo}</div>
        </div>
        <div style={{clear:'both'}}></div>
        {this.renderActions()}
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default (connect(mapStateToProps)(Question));
