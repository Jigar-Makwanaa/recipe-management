import React, { useEffect, useState } from 'react'
import Header from '../Header'
import './pages.css'
import { useNavigate, useParams } from 'react-router-dom'
import './pages.css'


const RecipeView = () => {

    const { id } = useParams()
    const [record, setRecord] = useState([])
    const [findRecord, setFindRecord] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        let allRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(allRecord)
    }, [])

    useEffect(() => {
        let findData = record.filter((val) => {
            return val.id == id
        })

        setFindRecord(findData)
    }, [record])


    // delete record start

    const deleteData = (id) => {
        let deleteData = record.filter((val) => {
            return val.id != id
        })

        setRecord(deleteData)

        localStorage.setItem('user', JSON.stringify(deleteData))

        navigate('/')
    }

    // delete record end


    return (
        <>
            <Header />

            {/* recipe view section start  */}
            <div className="recipe-view-section">
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="recipe-view-details flex">
                                {
                                    findRecord.map((val) => {
                                        return (
                                            <>
                                                <div className="details">
                                                    <h2>{val.title}</h2>
                                                    <h4>{val.resto}</h4>
                                                    <div className="view">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                    </div>
                                                    <div className="instruction">
                                                        <p>{val.instr}</p>
                                                    </div>
                                                    <div className="summary flex">
                                                        <div className="box ingredients">
                                                            <span>{val.ingre}</span>
                                                            <h4>Ingredients</h4>
                                                        </div>
                                                        <div className="box time">
                                                            <span>{val.time}</span>
                                                            <h4>Minutes</h4>
                                                        </div>
                                                        <div className="box calories">
                                                            <span>{val.calories}</span>
                                                            <h4>Calories</h4>
                                                        </div>
                                                    </div>
                                                    <div className="btn">
                                                        <button>Order now</button>
                                                    </div>
                                                    <div className="action flex">
                                                        <div className="delete-recipe">
                                                            <button onClick={() => deleteData(val.id)}><i class="fa-solid fa-trash"></i> Delete Recipe</button>
                                                        </div>
                                                        <div className="edit-recipe">
                                                            <button>
                                                                <i class="fa-solid fa-pen-to-square"></i> Edit Recipe
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="img">
                                                    <img src={val.img} alt="" />
                                                </div>
                                            </>
                                        )
                                    })
                                }
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