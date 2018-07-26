import React from 'react';
import Feed from './Feed';

class NavTabs extends React.Component {
  static propTypes = {
  };

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div style={{width:'80%',float:'left'}}>
        <div value={value} onChange={this.handleChange} >
          <div label="UNANSWERED" />
          <div label="ANSWERED" />
        </div>
        <Feed answered={value} />
      </div>
    );
  }
}

export default (NavTabs);
