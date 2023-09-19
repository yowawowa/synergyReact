import {Component} from 'react';
import styled from "styled-components";

class Clicker extends Component {
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

        const Button = styled.button`
            --accent-color: #FE5F55;
            background: transparent;
            border-radius: 3px;
            border: 2px solid var(--accent-color);
            color: var(--accent-color);
            display: inline-block;
            margin: 0.5rem 1rem;
            padding: 0.5rem 0;
            transition: all 200ms ease-in-out;
            width: 11rem; 
            background: ${props => props.$primary ? "#FFAFF0" : "#5C5D67"};
            color: ${props => props.$primary ? "#5C5D67" : "#FFAFF0"};         
        `
        const AnotherButton = styled(Button)`
            border-color: grey;
            color: #6BA292;    
        `
        return (
            <div className="Clicker">
                <p>You clicked {counter} times</p>
                <button onClick={() => {
                    this.onClickButton()
                }}>click here
                </button>
                <Button>Button</Button>
                <AnotherButton>Another Button</AnotherButton>
                <Button $primary>Third Button</Button>
                <Button as="a" href="#">Link with Button styles</Button>
            </div>
        );
    }
}


export default Clicker;
