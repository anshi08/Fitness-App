import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchBar from '../components/SearchBar'
import Exercises from '../components/Exercises'
import { Box } from '@mui/material'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchBar setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );

}

export default Home