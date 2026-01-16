import { Component } from 'react'
import Card from './components/Card'
import { products } from './data/product';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>ProductList</h1>
        <div className="row g-5">
          {products.map(item=>(
            <Card title={item.title} price={item.price} stock={item.rating.count} image={item.image}/>
          ))}
        </div>
      </div>
    )
  }
}

export default App