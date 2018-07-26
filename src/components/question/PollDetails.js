import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PollDetails extends Component {
  static propTypes = {
    questions: PropTypes.object.isRequired,
    answer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  countVotes(oneOrTwo) {
    const { questions, id } = this.props;
    const option = oneOrTwo === 1 ? 'optionOne' : 'optionTwo';
    return questions[id][option].votes.length;
  }

  render() {
    const { answer } = this.props;
    const optionOneCount = this.countVotes(1);
    const optionTwoCount = this.countVotes(2);
    const totalVotes = optionOneCount + optionTwoCount;
    const optionOnePercent = parseInt(100 * (optionOneCount / totalVotes), 10);
    const optionTwoPercent = parseInt(100 - optionOnePercent, 10);

    return (
      <div>
        <div>
            {answer !== '' ? `${answer}` : ''}
        </div>
        <div>
          <div>
              {`${optionOnePercent}%`}

              {optionOneCount === 1
                ? `voted by ${optionOneCount} user`
                : `voted by ${optionOneCount} users`}
          </div>
          <div>
              {`${optionTwoPercent}%`}
              {optionTwoCount === 1
                ? `voted by ${optionTwoCount} user`
                : `voted by ${optionTwoCount} users`}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authUser }, { id }) {
  let answer = '';

  if (questions[id].optionOne.votes.includes(authUser)) {
    answer = 'You voted for option one';
  } else if (questions[id].optionTwo.votes.includes(authUser)) {
    answer = 'You voted for option two‍';
  } else {
    answer = '';
  }
  return {
    answer,
    questions,
  };
}

export default (connect(mapStateToProps)(PollDetails));
