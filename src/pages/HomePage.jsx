import React, { useRef } from 'react'
import { setTrainerSlice } from '../store/slices/trainer.slice'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const inputTrainer = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleTrainer = (event) => {
    event.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate("/pokedex")
    }

  return (
    <section className='homePage'>
        <img className='homePage__img' src="/images/Pokedex_title.png" alt="" />
        <h1 className='homePage__h1'>¡Hello trainer!</h1>
        <p className='homePage__p'>To start, please enter your trainer nickname</p>
        <form className='homePage__form' onSubmit={handleTrainer}>
            <input className='homePage__form__input' ref={inputTrainer} type="text" />
            <button className='homePage__form__button'>Start!</button>
        </form>
    </section>
  )
}

export default HomePage
