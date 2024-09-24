import React, { useEffect, useState } from 'react'
import Header from './Header'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    // const [record, setRecord] = useState([])


    // useEffect(() => {
    //     let allRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

    //     setRecord(allRecord)
    // }, [])

    // console.log(record);

    return (
        <>
            <Header />

            {/* home-section start  */}

            <div className="home-section">
                <div className="top-img flex">
                    <div className="left">
                        <div className="img">
                            <img src="../img/strawberry-grain.webp" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src="../img/img-fruit-bowl.webp" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="search flex">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='Search 2M+ Recipes' />
                            </div>
                        </div>

                        <div className="experience-section">
                            <h3>Personalize Your Experience</h3>
                            <h2>What are your favorite cuisines?</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* home-section end */}

            {/* recipe-section start  */}
            <div className="recipe-section">
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <h2>
                                just for you
                            </h2>
                        </div>
                        <div className="main flex">
                            {/* {
                                record.map((val) => {
                                    return (
                                        <Link to={`/recipeView/${val.id}`}>
                                            <div className="box">
                                                <div className="content">
                                                    <div className="img">
                                                        <img src={val.img} alt="" />
                                                    </div>
                                                    <div className="details">
                                                        <div className="recipe-name">
                                                            <h2>{val.title}</h2>
                                                        </div>
                                                        <div className="restorant-name">
                                                            <h3>{val.resto}</h3>
                                                        </div>
                                                        <div className="review">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            } */}
                        </div>
                    </div>
                </div>
            </div>
            {/* recipe-section end */}


        </>
    )
}

export default Home