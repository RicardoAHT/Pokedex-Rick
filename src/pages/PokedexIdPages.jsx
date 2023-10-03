import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const PokedexIdPages = () => {

  const {id} = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)
  const firstType = pokemon?.types[0].type.name

  useEffect(() => {
    getPokemon()
  }, [id])
  
  return (
    <article className='PokedexIdPage__container' >
      <div className={`PokedexIdPage ${firstType}-border`}>
        <div className={`PokedexIdPage__div1 ${firstType}-gradient`}>
          <img className={`PokedexIdPage__div1__img`} src={pokemon?.sprites.other["official-artwork"].front_default} alt="Pokemon" />
        </div>
        <section className='PokedexIdPage__section1'>
          <h3 className='PokedexIdPage__section1__h3'># {pokemon?.id}</h3>
          <h2 className={`PokedexIdPage__section1__h2 ${firstType}-color`}> {pokemon?.species.name}</h2>
          <ul className='PokedexIdPage__section1__ul'>
            <li className='PokedexIdPage__section1__li'>
              <span className='PokedexIdPage__section1__li__span1'>Height</span> <span className='PokedexIdPage__section1__li__span2'>{pokemon?.height}</span>
            </li>
            <li className='PokedexIdPage__section1__li'>
              <span className='PokedexIdPage__section1__li__span1'>Weight</span> <span className='PokedexIdPage__section1__li__span2'>{pokemon?.weight}</span>
            </li>
          </ul>
        </section>
        <section className='PokedexIdPage__section2' >
          <div  className='PokedexIdPage__section2__div1'>
            <h3  className='PokedexIdPage__section2__div1__h3'>Types</h3>
            <ul  className='PokedexIdPage__section2__div1__ul'>            
              {
                pokemon?.types.map(typeInfo =>(
                  <li className='PokedexIdPage__section2__div1__ul__li' key={typeInfo.type.url}>{typeInfo.type.name}</li>
                ))
              }
            </ul>
          </div>
          <div className='PokedexIdPage__section2__div2'>
            <h3 className='PokedexIdPage__section2__div2__h3'>Abilities</h3>
            <ul className='PokedexIdPage__section2__div2__ul'>
              {
                pokemon?.abilities.map(ability =>(
                  <li className='PokedexIdPage__section2__div2__ul__li' key={ability.ability.url} >{ability.ability.name}</li>
                ))
              }
            </ul>
          </div>
        </section>
        <ul className='pokedexIdPage__ul'>
        {
          pokemon?.stats.map(startInfo => (
            <li className='pokedexIdPage__ul__li' key={startInfo.stat.url}>
              <span className='pokedexIdPage__ul__li__span1'>{startInfo.stat.name}</span>
              <div className='stats__container'>
                <span 
                className={`pokedexIdPage__ul__li__span2 ${firstType}-gradient`}
                style={{
                  color:'ghostwhite',
                  width: `${(startInfo.base_stat)/150*100}%`,
                  maxWidth: "100%"
                }}
                >
                  {startInfo.base_stat}
                </span>
              </div>
            </li>
        ))
        }
        </ul>
        </div>
        <div className={`PokedexIdPage ${firstType}-border`}>
          <div className='PokedexIdPage__div2'>
            <h3 className='PokedexIdPage__div2__h3'>
              Moves
            </h3>
            <ul className='PokedexIdPage__div2__ul'>
              {
                pokemon?.moves.map(movement =>(
                  <li className='PokedexIdPage__div2__ul__li' key={movement.move.name} >
                    {movement.move.name}
                  </li>              
                ))
              }
            </ul>
          </div>
        </div>
        <button className='PokedexIdPage__button' > <Link to="/pokedex">Back</Link></button>
    </article>
  )
}

export default PokedexIdPages