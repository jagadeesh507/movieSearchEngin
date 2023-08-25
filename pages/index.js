import React from 'react'
import { chakra } from '@chakra-ui/react'
import Movies from './Movies'
import ToggleButton from './Button'
function Home() {
  return (
    <chakra.div>
    <ToggleButton/>
    <Movies/>
    </chakra.div>
  )
}

export default Home