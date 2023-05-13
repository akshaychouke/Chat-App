import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src='https://plus.unsplash.com/premium_photo-1681990629558-bd641fca4b29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt=''/>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
