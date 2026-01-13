import { Component } from 'react'
import linuxPhoto from './assets/img/linux-photo.jpg'
import Card from './components/Card'

class App extends Component {
    render() {
        return (
            <>
                <section className='container mt-5'>
                    <div className="row g-5">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </section>
                <section>
                    <h1>Hello </h1>
                </section>
            </>
        )
    }
}

export default App