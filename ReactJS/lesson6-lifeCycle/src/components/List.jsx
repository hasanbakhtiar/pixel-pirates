import { Component } from 'react'


class MyText extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount is running...");
        alert("product deleted")

    }
    render() {
        return (
            <>
                <p>Hello World</p>
            </>
        )
    }
}





class List extends Component {
    componentDidMount() {
        fetch("https://fakestoreapi.com/products").then(res => res.json())
            .then(data => this.setState({ products: data })
            )
        console.log("componentDidMount is running...");
    }
    
    
    constructor() {
        super();
        this.state = ({
            count: 0,
            display: true,
            products: []
        });
        console.log("constructor is running...");
    }

    

    componentDidUpdate() {
        // alert("add to card")
        console.log("componentDidUpdate is running...");

    }


    render() {

        let text;
        if (this.state.display) {
            text = <MyText />
        }
        return (
            <div>
                {this.state.products.map(item => (
                    <p>{item.title}</p>
                ))}
                {text}
                <button className='btn btn-danger' onClick={() => { this.setState({ display: false }) }}>delete</button>
                <p>{this.state.count}</p>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }} className='btn btn-success'>+1</button>
            </div>
        )
    }
}

export default List