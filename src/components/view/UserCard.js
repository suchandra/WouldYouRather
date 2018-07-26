import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({
  userName,
  questionsAnswered,
  questionsPosted,
}) => (
  <div>
    <div title={userName} />
    <div>{userName} Posted {questionsPosted} questions
        <div style={{ width: 20, margin: '0 15 -7 0' }} color="primary" />
          Responded {questionsAnswered} questions
        </div>
    </div>
);

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  questionsAnswered: PropTypes.number.isRequired,
  questionsPosted: PropTypes.number.isRequired,
};

export default (UserCard);
