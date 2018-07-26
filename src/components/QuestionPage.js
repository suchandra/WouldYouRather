import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Question from './question/Question';

const QuestionPage = ({
  classes,
  match,
  realName,
  errorPage,
}) => {
  const { id } = match.params;
  const { path } = match;

  return (
    <div >
        {path.includes('details') ?
        'Poll Details' :
        'Would You Rather'}

      <div >
        {path.includes('details') ?
          <Question
            id={id}
            status="PollDetails"
          /> :
          <Question
            id={id}
            status="PollIsVoting"
          />}
      </div>
    <br />
      <div style={{ margin: '47px auto', textAlign: 'center' ,fontSize: '30px'}}>

          {`Posted by ${realName}`}
      </div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{  margin: '47px auto', textAlign: 'center' ,fontSize: '30px' }} >
          {'Go Home'}
        </div>
      </Link>
    </div>
  );
};

QuestionPage.propTypes = {
  realName: PropTypes.string,
  errorPage: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
};

QuestionPage.defaultProps = {
  realName: ''
};

function mapStateToProps({ questions, users, authUser }, { match }) {
  if (questions[match.params.id] === undefined) {
    const errorPage = true;
    return {
      errorPage,
    };
  }
  const userName = questions[match.params.id].author;
  const realName = authUser === userName ? 'you' : users[userName].name;
  const errorPage = false;
  return {
    realName,
    errorPage,
  };
}

export default (connect(mapStateToProps)(QuestionPage));
