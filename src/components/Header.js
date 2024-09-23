import React from 'react'

const Header = () => {

    return (
        <div className='Header'>
            <div className='logo'>
                <h1>ELOK</h1>
                <h5>ОНЛАЙН - БОЗОР</h5>
            </div>
            <form id="search">
                <input type="search" placeholder="пойафзоли мардона" />
                <button>ҷустан</button>
            </form>
            <nav>
                <span>ЗАБОН </span>
                <span>УТОҚ  </span>
                <span>САБАД </span>
            </nav>
        </div>
    )
}

export default Header