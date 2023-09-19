import {Component} from 'react'


class StateTutor extends Component {
    export
    default
    StateTutor

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            num: 0
        }
    }

    onHandleChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    onClick = (e) => {
        this.setState({
            num: this.state.num + 1
        })
    }

    render() {
        let {num, text} = this.state
        return (
            <div class='StateTutor'>
                <input type="text" placeholder="pls type me" value={this.state.text}
                       onChange={e => this.onHandleChange(e)}/>
                <p>{text}</p>
                <input type='button' value="+++" onClick={e => this.onClick(e)}/>
                <p>{num}</p>
            </div>
        );
    }
}

export default StateTutor