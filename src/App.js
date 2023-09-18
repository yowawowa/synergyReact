import './App.css';
import {Component} from 'react';
import Clicker from './components/clicker/clicker';
import Framework from './components/framework'
import StateTutor from './components/stateTutor'
import './sass.scss'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Clicker />
                <Framework />
                <>
                    <h1>я выгляжу ужасно :c</h1>
                </>
                <StateTutor />
            </div>
        );
    }
}

export default App;
