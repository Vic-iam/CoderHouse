import React from 'react'

const FilterGenre = ({genero, setGenero}) => {
  return (
    <select value={genero} onChange={(e) => setGenero(e.target.value)}>
        <option value="">Todos</option>
        <option value="Shonen">Comedia</option>
        <option value="Seinen">Seinen</option>
    </select>
  )
}

export default FilterGenre;