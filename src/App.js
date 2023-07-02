import React from 'react'
import Folder from './components/Folder'
import explorer from "./data/jsonData";



function App() {


  return (
    <>
      <Folder  explorer={explorer}/>
    </>
  )
}

export default App