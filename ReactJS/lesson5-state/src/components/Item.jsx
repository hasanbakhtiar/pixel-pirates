import { Component } from 'react'

export class Item extends Component {
    constructor() {
        super();
        this.increment = this.increment.bind(this);
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Item