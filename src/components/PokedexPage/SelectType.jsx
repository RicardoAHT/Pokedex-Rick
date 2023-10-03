import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

const SelectType = ({setTypeSelected}) => {

    const url = "https://pokeapi.co/api/v2/type"
    const [types, getTypes] = useFetch(url)

    useEffect (() => {
      getTypes()
    }, [])
    const handleChange = (event) => {
      setTypeSelected(event.target.value)
    }
  
  return (
    <div className='selectType'>
      <select className='selectType__select' onChange={handleChange}>
        <option value="allPokemons">All pokemons</option>
        { 
            types?.results.map(typeInfo => (
              <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
            ))
        }
      </select>
    </div>
  )
}

export default SelectType
