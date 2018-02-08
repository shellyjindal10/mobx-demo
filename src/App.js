import React, { Component } from 'react';
import {observer, inject} from 'mobx-react'

@observer
class App extends Component {
  handleKeyPress(e) {
    const {store} = this.props
    if(e.which === 13){
      store.addBird(e.target.value)
      e.target.value = ""
    }
  }

  handleClear() {
    console.log(`This handleClear`)
    this.props.store.clearBird()
  }

  render() {
    const {birds} = this.props.store
    const birdList = birds.map(bird => (
      <li>{bird}</li>
    ))

    return (
      <div className="App">
        <h1>Total Birds are : -> {this.props.store.birdsCount}</h1>
        <div>
          <input placeholder="add bird name" onKeyPress={this.handleKeyPress.bind(this)}/>
          <ul>{birdList}</ul>
          <button onClick={this.handleClear.bind(this)}>Clear birds List</button>
        </div>
      </div>
    );
  }
}

export default App;
