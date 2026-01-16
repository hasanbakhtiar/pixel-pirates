import { Component } from 'react'
import Item from './components/Item'
import SingleProduct from './components/SingleProduct'

export class App extends Component {
  render() {
    return (
      <div>
        <SingleProduct />
      </div>
    )
  }
}

export default App