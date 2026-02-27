import React from 'react'
import { useState } from 'react'
import { BeatLoader } from "react-spinners";

const Loading = ({ text }) => {


  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",flexDirection: "column", width: "100%", height: "95vh", gap: "20px"}}> 
    
    <BeatLoader size={15} margin={2} />

    <p> {text} </p>
    
    </div>
  )
}

export default Loading