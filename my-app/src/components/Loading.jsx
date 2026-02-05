import React from 'react'
import { useState } from 'react'



const Loading = () => {

    fetchData().then((res) => console.log())

  return (
    <div>Loading</div>
  )
}

export default Loading