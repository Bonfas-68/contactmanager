import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    //ajax calls
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }
  // componentWillMount() {
  //   console.log('componentWillMount..');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate..');
  // }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate..');
  // }

  // //when a component receive new props
  // componentWillReceiveProps(nextProp, nextState) {
  //   console.log('componentWillReceiveProps');
  // }

  // static getDirivedStateFropProps(nextProp, prevState) {
  //   //must either return null or object
  //   return null;
  // }
  // getSnapshotBeforeUpdate(prevProp, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
