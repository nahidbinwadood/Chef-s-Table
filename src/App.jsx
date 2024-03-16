// import { useState,useEffect } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto'>
        {/* Navbar */}
        <Header></Header>

        {/* Banner Section */}
        <Banner></Banner>


        {/* Recipes */}
        <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
