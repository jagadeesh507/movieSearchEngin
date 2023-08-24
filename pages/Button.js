import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import {FaCloudMoon} from "react-icons/fa"
import {BsCloudSunFill} from "react-icons/bs"
function ToggleButton() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex justifyContent="right"rounded={"lg"} mr={"40px"} mt={"20px"}>
    <Button onClick={toggleColorMode} >
    {colorMode==="light"?<FaCloudMoon fontSize={"30px"} />:<BsCloudSunFill fontSize={"30px"} />}
    </Button></Flex>
  )
}

export default ToggleButton;