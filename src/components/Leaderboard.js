import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserCard from './view/UserCard';

const Leaderboard = ({ classes, userDetails }) => (
  <div>
      Leaderboard
    <ul>
      {userDetails.map(user => (
          <li key={user.userName} style={{ listStyleType: 'none' }}>
            <UserCard
              userName={user.userName}
              questionsAnswered={user.questionsAnswered}
              questionsPosted={user.questionsPosted}
            />
          </li>))}
    </ul>
  </div>
);

Leaderboard.propTypes = {
  userDetails: PropTypes.array.isRequired
};

function mapStateToProps({ users }) {
  const userDetails = Object.keys(users).map((user) => {
      const tempUserDetails = {
        userName: users[user].name,
        questionsAnswered: Object.keys(users[user].answers).length,
        questionsPosted: users[user].questions.length,
      };
      const rank = tempUserDetails.questionsAnswered + tempUserDetails.questionsPosted;
      tempUserDetails.userRank = rank;
      return (tempUserDetails);
    })
    .sort((a, b) => (
      b.userRank - a.userRank
    ));
  return {
    userDetails,
  };
}

export default (connect(mapStateToProps)(Leaderboard));
