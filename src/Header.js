import React from 'react'
import './Header.css'
import Message from './Message'
import Post from './Post'
function Header() {
    return (
        <div className="header">
            <div className="header__top">
            <h1>Monavi</h1>
            <div className="header__right">
               <input type="text" placeholder="User Name"/>
               <input type="text" placeholder="Password"/>
               <button className="btn1">Login</button>
               <button className="btn2">Register</button>
               <p>Don't have account...</p>

            </div>
            </div>

            <div className="header__down">
                <div className="demo">
                <h3>NASDAQ Mock Investment</h3>
                </div>
                <div className="demo">
                <h3>Bitcoin simulated investment</h3>
                </div>
                <div className="demo">
                <h3>Ranking</h3>
                </div>
                <div className="demo">
                <h3>Item Shop</h3>
                </div>
                <div className="demo">
                <h3>Community</h3>
                </div>
                <div className="demo">
                <h3>Service center</h3>
                </div>
                <div className="demo1">
                <h3>About us</h3>
                </div>

            </div>

            <div className="header__body">
                <Post />
                <Message />
            </div>

        </div>
    )
}

export default Header
