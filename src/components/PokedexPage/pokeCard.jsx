import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const pokeCard = ({pokeUrl}) => {

    const [pokemon, getPokemon] = useFetch(pokeUrl)
    useEffect(() => {
      getPokemon() 
    }, [])
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(`/pokedex/${pokemon.id}`)
    }
    const firstType = pokemon?.types[0].type.name

  return (
    <article className={`pokeCard ${firstType}-border`} onClick={handleNavigate}>
        <header className={`pokeCard__header ${firstType}-gradient `}>
            <img className='pokeCard__header__img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className='pokeCard__section'>
            <h3 className={`pokeCard__section__h3 ${firstType}-color`}>{pokemon?.name}</h3>
            <ul className='pokeCard__section__ul'>
                {
                    pokemon?.types.map(typeInfo =>(
                        <li className='pokeCard__section__ul__li' key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr className='pokeCard__section__hr' />
            <ul className='pokeCard__section__ul2'>
                {
                    pokemon?.stats.map(startInfo => (
                        <li className='pokeCard__section__ul2__li' key={startInfo.stat.url}>
                            <span className='pokeCard__section__ul2__li__span1'>{startInfo.stat.name}</span>
                            <span className={`pokeCard__section__ul2__li__span2 ${firstType}-color`}>{startInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default pokeCard
