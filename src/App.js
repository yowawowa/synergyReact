import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0
  }

  onClickButton = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

    render() {
      let counter = this.state.counter
      return (
        <div className="App">
          <p>You clicked {counter} times</p>
          <button onClick={() => { this.onClickButton() }}>click here</button>
        </div>
      );
    }
  }


export default App;
