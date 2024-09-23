import React, { useState } from 'react'
import Header from '../Header'

const RecipeAdd = () => {

    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [resto, setResto] = useState('')
    const [instr, setInstr] = useState('')
    const [ingre, setIngre] = useState('')
    const [time, setTime] = useState('')
    const [calories, setCalories] = useState('')

    return (
        <>
            <Header />

            {/* add-recipe-section start   */}
            <div className="recipe-add-section">
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="heading">
                                <h2>Add Recipe</h2>
                            </div>
                            <div className="form flex">
                                <form action="">
                                    <div className="img-url">
                                        <input type="text" placeholder='image url' />
                                    </div>
                                    <div className="title">
                                        <input type="text" placeholder='recipe name' />
                                    </div>
                                    <div className="resto-name">
                                        <input type="text" placeholder='restorant-name' />
                                    </div>
                                    <div className="instruction">
                                        <input type="text" placeholder='instruction' />
                                    </div>
                                    <div className="ingredients">
                                        <input type="number" placeholder='ingredients' />
                                    </div>
                                    <div className="time">
                                        <input type="number" placeholder='time' />
                                    </div>
                                    <div className="calories">
                                        <input type="number" placeholder='coloeies' />
                                    </div>
                                    <div className="btn">
                                        <button>Add Recipe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-img flex">
                    <div className="left">
                        <img src="../img/global-bottom-taco-left.jpg" alt="" />
                    </div>
                    <div className="right">
                        <img src="../img/global-bottom-taco-right.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/* add-recipe-section end  */}
        </>
    )
}

export default RecipeAdd