import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import PokedexIdLocation from '../components/PokedexIdLocation/PokedexIdLocation'
import { useParams } from 'react-router-dom'

const PokedexLocationPage = () => {

    const {id} = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
    const [locations, getLocations] = useFetch(url)
    
    useEffect(() => {
      getLocations()
    }, [])
    
  return (
    <section>
        <h2>Location</h2>
        <article>
            {
                locations?.map(location => (
                    <PokedexIdLocation
                        key={location.location_area.url}
                        name={location.location_area.name}
                        url={location.location_area.url}
                    />
                    /*<p>
                        {location.location_area.name}

                    </p>*/
                ))
            }
        </article>
    </section>
  )
}

export default PokedexLocationPage
