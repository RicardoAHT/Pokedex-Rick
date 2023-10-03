import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState()

    const getApi = () => {
        axios.get(url)
            .then(response => setInfoApi(response.data))
            .catch(error => console.log(error))
    }
    const getTypeApi = (urlType) => {
        axios.get(urlType)
            .then(response => {
                response.data
                const obj = {
                    results: response.data.pokemon.map(e => e.pokemon)
                }
                setInfoApi(obj)
            })
            .catch(error => console.log(error))
    }
    return [infoApi, getApi, getTypeApi]
}

export default useFetch
