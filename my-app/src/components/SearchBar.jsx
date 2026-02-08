import React from 'react'

const SearchBar = ({ value, onchange }) => {

  return (

    <>
    
    <input type='text' placeholder='Buscar manga...' value={value} onchange={(e) => onchange(e.targe.value)} />

    </>
  
)
}

export default SearchBar