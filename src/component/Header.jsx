import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="logo">
                                <div className="img">
                                    <Link to={'/'}><img src="../img/yummly.svg" alt="" /></Link>
                                </div>
                            </div>
                            <div className="menu">
                                <ul className='flex'>
                                    <li>meal planning</li>
                                    <li>recipe</li>
                                    <li>about yummly</li>
                                    <li>about us</li>
                                    <li>cntact us</li>
                                    <li className='add'>
                                        <Link to={'/recipeAdd'}>Recipe Add</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header