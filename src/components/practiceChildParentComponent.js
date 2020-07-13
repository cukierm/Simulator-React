import React, { Component } from 'react';
import { Button } from 'reactstrap';


class Parent extends Component {
  
    constructor(props) {
      super(props);
      this.state={a: null, b: null, c: null, d: null}
    }
    
     updateState = (newA, newB, newC, newD) => {
      this.setState(
      {a: newA, b:newB, c:newC, d: newD})
    }
  
    render (){
    return (
      <div>
        <Child updateState={this.updateState} />
        <p>The parent state is {JSON.stringify(this.state)}</p>
        </div>
    );
    }  
  }
    
  class Child extends Component {
    //constructor (props) {
    //super(props);
      //this.state = {a: 7, b: 3, c: 5, d: 9}
     // }
  
    render() {
      return(
      <Button onClick={() => {this.props.updateState(7,3,5,9)}}>Click to Update State</Button>
        )
    }
  }
  
export default Parent;