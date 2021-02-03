import React, {Component} from 'react';

class ClassClick extends Component {
  state={count:0}
  addCount=()=>{
    this.setState((preState,props)=>({count:preState.count+1 }))
  }
  render() {
    return (
      <div>
        <h1>点击了{this.state.count}次</h1>
        <button onClick={this.addCount}>点击</button>
      </div>
    );
  }
}

export default ClassClick;
