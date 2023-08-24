import React from 'react'
import { chakra } from '@chakra-ui/react'
import Movies from './Movies'
import Navbar from './Navbar'
import ToggleButton from './Button'
import BigCard from './BigCard'
function Home() {
  return (
    <chakra.div>
    <ToggleButton/>
    <Movies/>
    </chakra.div>
  )
}

export default Home