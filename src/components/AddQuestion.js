import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleAddQuestion } from '../actions/questions';

class AddQuestion extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  handleChangeOneText = (e) => {
    const optionOneText = e.target.value;
    this.setState(() => ({
      optionOneText,
    }));
  }

  handleChangeTwoText = (e) => {
    const optionTwoText = e.target.value;
    this.setState(() => ({
      optionTwoText,
    }));
  }

  handleSubmit = (e) => {
    const { dispatch } = this.props;
    const optionOneText = document.getElementById('optionOneQuestion').value
    const optionTwoText = document.getElementById('optionTwoQuestion').value
    //e.preventDefault();
    if (optionOneText && optionTwoText) {
      dispatch(handleAddQuestion(optionOneText, optionTwoText));
    }
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }));
  }
  updateValue = (e) => {
    console.log('keyup:'+document.getElementById('optionOneQuestion').value)
    this.setState(() => ({
      optionOneText: document.getElementById('optionOneQuestion').value,
      optionTwoText: document.getElementById('optionTwoQuestion').value
    }));
  }

  render() {
    return (
      <div style={{width:'70%',margin:'0 auto'}}>
        <div style={{ textAlign: 'center' }}> Add a New Question </div>
      <div style={{ textAlign: 'center' }}>Would You Rather</div>
          <div style={{ textAlign: 'center' }}>
            <textarea placeholder="Option One" id="optionOneQuestion" onKeyUp={this.updateValue}/>
            <textarea placeholder="Option Two" id="optionTwoQuestion" onKeyUp={this.updateValue}/>
          </div>
          <div style={{ textAlign: 'center',marginTop:'30px', cursor:'pointer',backgroundColor:'#ddd',width:'50%',padding:'30px',margin:'0 auto' }}>
            <Link to='/' style={{pointerEvents: (this.state.optionOneText === '' || this.state.optionTwoText === '') ?  'none' : ''}} onClick={this.handleSubmit} >
              Add Question
            </Link>
          </div>
      </div>
    );
  }
}

export default (connect()(AddQuestion));
