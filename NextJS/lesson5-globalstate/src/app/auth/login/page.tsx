"use client"
import axios from 'axios';
import React from 'react'

const page = () => {

  const formSubmited = (e: React.SubmitEvent) => {
    e.preventDefault();
    axios.delete('https://dummyjson.com/products/1')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  return (
    <div className='d-flex align-items-center justify-content-center'>
      <form onSubmit={formSubmited} className="container">
        <input type="text" placeholder='email' />
        <button>send</button>
      </form>
    </div>
  )
}

export default page