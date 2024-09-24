import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { json } from 'react-router-dom'

const RecipeAdd = () => {

    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [resto, setResto] = useState('')
    const [instr, setInstr] = useState('')
    const [ingre, setIngre] = useState('')
    const [time, setTime] = useState('')
    const [calories, setCalories] = useState('')
    let id = Math.floor(Math.random() * 1000)
    const [record, setRecord] = useState([])

    // add recipe start 

    const handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            id, title, img, resto, instr, ingre, time, calories
        }

        let allRecord = [...record, obj]

        setRecord(allRecord);
        
        alert("Recie successfully added" )

        localStorage.setItem('user', JSON.stringify(allRecord))

        setTitle('')
        setImg('')
        setResto('')
        setInstr('')
        setIngre('')
        setTime('')
        setCalories('')
    }

    // add recipe end

    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldRecord)

    }, [])

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
                                <form action="" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="img-url">
                                        <input type="text" placeholder='image url' onChange={(e) => setImg(e.target.value)} value={img} />
                                    </div>
                                    <div className="title">
                                        <input type="text" placeholder='recipe name' onChange={(e) => setTitle(e.target.value)} value={title} />
                                    </div>
                                    <div className="resto-name">
                                        <input type="text" placeholder='restorant-name' onChange={(e) => setResto(e.target.value)} value={resto} />
                                    </div>
                                    <div className="instruction">
                                        <input type="text" placeholder='instruction' onChange={(e) => setInstr(e.target.value)} value={instr} />
                                    </div>
                                    <div className="ingredients">
                                        <input type="number" placeholder='ingredients' onChange={(e) => setIngre(e.target.value)} value={ingre} />
                                    </div>
                                    <div className="time">
                                        <input type="number" placeholder='time' onChange={(e) => setTime(e.target.value)} value={time} />
                                    </div>
                                    <div className="calories">
                                        <input type="number" placeholder='coloeies' onChange={(e) => setCalories(e.target.value)} value={calories} />
                                    </div>
                                    <div className="btn">
                                        <button type='submit'>Add Recipe</button>
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