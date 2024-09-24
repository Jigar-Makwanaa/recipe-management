import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useNavigate, useParams } from 'react-router-dom'

const RecipeEdit = () => {
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [resto, setResto] = useState('')
    const [instr, setInstr] = useState('')
    const [ingre, setIngre] = useState('')
    const [time, setTime] = useState('')
    const [calories, setCalories] = useState('')
    const [record, setRecord] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    // Edit recipe start 

    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldRecord)

        let editData = oldRecord.find((val) => {
            return val.id == id
        })

        console.log(editData);
        setTitle(editData.title)
        setImg(editData.img)
        setResto(editData.resto)
        setInstr(editData.instr)
        setIngre(editData.ingre)
        setTime(editData.time)
        setCalories(editData.calories)

    }, [id])

    // edit recipe end

    // update recipe start

    const handleSubmit = (e) => {
        e.preventDefault()

        let updateData = record.map((val) => {
            if (val.id == id) {
                return {
                    ...val,
                    title: title,
                    img: img,
                    resto: resto,
                    instr: instr,
                    ingre: ingre,
                    time: time,
                    calories: calories
                }
            }
            return val
        })

        setRecord(updateData);

        localStorage.setItem('user', JSON.stringify(updateData))

        alert("Recie successfully Edited")

        navigate(`/recipeView/${id}`)

    }

    // update recipe end

    return (
        <>
            <Header />

            {/* add-recipe-section start   */}
            <div className="recipe-add-section">
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="heading">
                                <h2>Edit Recipe</h2>
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
                                        <button type='submit'>Edit Recipe</button>
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

export default RecipeEdit