import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from "../hooks/useFetch"
import PokeCard from '../components/PokedexPage/pokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import { Box, Pagination } from "@mui/material";

const PokedexPage = () => {
  
  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${2000}`
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url) //Info de la API
  const trainer = useSelector(store => store.trainer) // NickName
  const [inputValue, setInputValue] = useState("") //Filtro por Nombre
  const [typeSelected, setTypeSelected] = useState("allPokemons") //Filtro por tipo
  const inputSearch = useRef()
  //*! Filtro
  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))
  //*! Pagination MaterialUI
  const pokeArray = pokeFiltered
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = pokeArray?.slice(itemOffset, endOffset);
  const pageCount = pokeArray && Number.isFinite(pokeArray.length) ? Math.ceil(pokeArray.length / itemsPerPage) : 0;
  //*! Pagination Material UI
  // Funcion para iterar por paginas
  const handleChangePage = (event, value) => {
    const value2 = value - 1;
    const newOffset = (value2 * itemsPerPage);    
    setItemOffset(newOffset);
  };
    
  useEffect (() => {
    if (typeSelected === "allPokemons"){
      getPokemons()
    }else{
      getTypePokemon(typeSelected)
      setItemOffset(0)
    }
  }, [typeSelected])
  
  const handleSearch = (event) => {
    event.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
    setItemOffset(0)
  }

  return (
    <>
      <main className='pokedexPage'>
        <header className='pokedexPage__header'>
          <div className='pokedexPage__header__div1'> 
            <img className='pokedexPage__header__img' src="/src/assets/pokedex_title.png" alt="Pokedex" />
          </div>
          <div className='pokedexPage__header__div2'> </div>
        </header>
        <h2 className='pokedexPage__h2'>Hello {trainer}</h2>
        <div className='pokedexPage__div__search'>
          <form className='pokedexPage__div__form' onSubmit={handleSearch}>
            <input className='pokedexPage__div__form__input'  type="text" ref={inputSearch} />
            <button className='pokedexPage__div__form__button'>Search</button>
          </form>
          <SelectType
            setTypeSelected={setTypeSelected}
          />
        </div>
        <section className='pokedexPage__section'>
          {
            currentItems?.map(poke => (
              <PokeCard
                key={poke.url}
                pokeUrl ={poke.url}
              />
            ))
          }
        </section>
      </main>
      <div className='paginationContainer'>
        <Box sx={{ width: "90%", display: "flex", justifyContent: "center" , overflow:"hidden" }}>
          <Pagination
            count={pageCount}
            onChange={handleChangePage}
            size="small"
            color="primary"
            boundaryCount={1}
            siblingCount={0}
            /*disabled={count === 0 ? true : false}*/
            shape={"circular"}
          /> 
        </Box>
      </div>
    </>
  )
}

export default PokedexPage
