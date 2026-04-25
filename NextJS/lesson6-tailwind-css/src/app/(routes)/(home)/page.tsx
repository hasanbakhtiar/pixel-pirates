import React from 'react'

const Home = () => {
    return (
        <>
            <header className='flex justify-between p-5 bg-blue-700 rounded-2xl'>
                <div className="logo">Logo</div>
                <nav className='w-[50%] flex justify-center'>
                    <ul className='w-[100%] flex justify-between'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <button>Login</button>
            </header>
        </>
    )
}

export default Home