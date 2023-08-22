import React from 'react'
import {Flex,Box,HStack,Image,Heading} from "@chakra-ui/react"
import {LuSun} from "react-icons/lu"
import "./images/movie.png"
function Navbar() {
  return (
    <Flex>
        <Box
        w="full"
        h="80px"
        bg={"gray.400"}
        position="sticky"
        top={0}
      >
        <Flex alignItems={"center"} justifyContent="space-between"pt={3}>
          <HStack>
            {" "}
            <Image
              w="56px"
              h="56px"
              src="images/movie.png"
              alt="image logo"
            ></Image>
            <Heading>Movie search</Heading>
          </HStack>
          <LuSun/>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Navbar