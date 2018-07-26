import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FeedLink(props) {
  const { id, status } = props;
  const cardStyles = {
    height: 50,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#E8EAF6',
  };

  return (
    <div style={cardStyles}>
      {status === 'UserWillVote' ?
        <Link to={`/questions/${id}`} style={{ textDecoration: 'none', width: '100%' , lineHeight:'48px'}}>
          <div style={{ width: '100%' }} > Vote </div>
        </Link> :
        <Link to={`/questions/${id}/details`} style={{ textDecoration: 'none', width: '100%' , lineHeight:'48px'}}>
          <div style={{ width: '100%' }} > Poll Details </div>
        </Link>}
    </div>
  );
}

FeedLink.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    'UserWillVote',
    'UserDidVote',
  ]).isRequired,
};
