import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

const PokedexIdLocation = ({name, url}) => {

    const [location, getlocation] = useFetch(url)

    useEffect(() =>{
      getlocation()  
    }, [])

    console.log(location)

    return (
    <article>
      <h3>{name}</h3>
    </article>
  )
}

export default PokedexIdLocation
