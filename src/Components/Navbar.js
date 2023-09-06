import React from 'react'
import mainLogo from './../mainLogo.svg'
import profileImage from './../profileImage.jpg'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar container'>
                <div>
                    <img src={mainLogo} alt='' width={80} height={80} />
                </div>
                <div>
                    <img className='profile-image' src={profileImage} alt='' width={50} height={50} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar