import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import HomeList from './HomeList'

const HomeListContainer = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setTimeout(() =>{
     setIsLoading(false)
    }, 500)

  }, [])

  return (
    <>
    { isLoading ? <Loading text={"Cargando datos..."} /> : <HomeList /> }
    </>
  )
}

export default HomeListContainer