import React, { useEffect, useState } from 'react'
import Header from '../Header'
import './pages.css'

const RecipeView = () => {
    

    return (
        <>
            <Header />

            {/* recipe view section start  */}
            <div className="recipe-view-section">
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="recipe-view-details flex">
                                <div className="details">
                                    <h2>Healthy Chocolate Pudding</h2>
                                    <h4>CHOCOLATE COVERED KATIE</h4>
                                    <div className="view">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div className="instruction">
                                        <p>12letteruser: "Great! Yummly didn’t affect it at all."</p>
                                    </div>
                                    <div className="summary flex">
                                        <div className="box ingredients">
                                            <span>7</span>
                                            <h4>Ingredients</h4>
                                        </div>
                                        <div className="box time">
                                            <span>15</span>
                                            <h4>Minutes</h4>
                                        </div>
                                        <div className="box calories">
                                            <span>400</span>
                                            <h4>Calories</h4>
                                        </div>
                                    </div>
                                    <div className="btn">
                                        <button>Order now</button>
                                    </div>
                                    <div className="action flex">
                                        <div className="delete-recipe">
                                            <button><i class="fa-solid fa-trash"></i> Delete Recipe</button>
                                        </div>
                                        <div className="edit-recipe">
                                            <button>
                                                <i class="fa-solid fa-pen-to-square"></i> Edit Recipe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="https://lh3.googleusercontent.com/FR3Dm5BAciT7Xpft2xKW4bkBIK9RKWo4qvbCS_Mt57gSw4HUWBZz9Ge9goLH43CQkYVC542vA7q-fU9M0tIJ=w640-h640-c-rw-v1-e365" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* recipe view section end */}
        </>
    )
}

export default RecipeView