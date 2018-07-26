import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './question/Question';

const Feed = ({
  answeredQuestionsID,
  unansweredQuestionsID,
  answered,
}) => (
  <div>
    <ul>
      {answered === 0 ?
          unansweredQuestionsID
        .map(id => (
          <li key={id} style={{ listStyleType: 'none' }} >
            <Question id={id} status="UserWillVote" />
          </li>)) :
          answeredQuestionsID
        .map(id => (
          <li key={id} style={{ listStyleType: 'none' }} >
            <Question id={id} status="UserDidVote" />
          </li>))}
    </ul>
  </div>
);

Feed.propTypes = {
  unansweredQuestionsID: PropTypes.arrayOf(PropTypes.string).isRequired,
  answeredQuestionsID: PropTypes.arrayOf(PropTypes.string).isRequired,
  answered: PropTypes.number.isRequired,
};

function mapStateToProps({ questions, authUser }) {
  const userHasAnswered = Object.keys(questions)
    .filter(i => (
      questions[i].optionOne.votes.includes(authUser) ||
      questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  const userHasNotAnswered = Object.keys(questions)
    .filter(i => (
      !questions[i].optionOne.votes.includes(authUser) &&
      !questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  return {
    answeredQuestionsID: userHasAnswered,
    unansweredQuestionsID: userHasNotAnswered,
  };
}

export default (connect(mapStateToProps)(Feed));
