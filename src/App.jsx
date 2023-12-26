import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'


const App = () => {

  return (
    <BrowserRouter>
    <Box width="400px" sx={{ width : { xl : "1488px" }}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail />}/>

        <Route path='*' element={< ErrorPage />}/>
      </Routes>
      <Footer />
    </Box>
    
    </BrowserRouter>
    
  )
}

export default App