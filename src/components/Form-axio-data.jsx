import React, { Component } from 'react';

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      title: '',
      body: '',
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type='text' name={userId} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name={title} onChange={this.changeHandler} />
          </div>
          <div>
            <input type='text' name={body} onChange={this.changeHandler} />
          </div>
          <button type='submit'>Ok</button>
        </form>
      </div>
    );
  }
}

export default Chart;
