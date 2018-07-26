import React from 'react';

function AddButton(props) {
  return (

      <div style={{right: '24px',
    bottom: '16px',
    position: 'fixed',
    backgroundColor: 'red',
    color: '#fff',
    padding: '25px',
    borderRadius: '50%',
    width: '65px',
    height: '65px',
    lineHeight: '29px',
    textAlign: 'center',
    fontSize: '19px'}}>Add Question</div>

  );
}

AddButton.propTypes = {
};

export default (AddButton);
