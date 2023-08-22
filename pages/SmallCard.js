import React from 'react'
import {Flex,Box,chakra} from "@chakra-ui/react"
function SmallCard({title}) {
  return (
    <Flex
  p={2}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Flex
    direction="column"
    justifyContent="center"
    alignItems="center"
    w="sm"
    mx="auto"
  >
    <Box
      bg="gray.300"
      h={56}
      w="full"
      rounded="lg"
      shadow="md"
      bgSize="cover"
      bgPos="center"
      style={{
        backgroundImage: 
        `url(${title.Poster})`,
      }}
    ></Box>

    <Box
      w={{
        base: 40,
        md: 56,
      }}
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      mt={-10}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <chakra.h3
        py={2}
        textAlign="center"
        fontWeight="bold"
        textTransform="uppercase"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        letterSpacing={1}
      >
        {title.Title}
      </chakra.h3>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={2}
        px={3}
        bg="gray.200"
        _dark={{
          bg: "gray.700",
        }}
      >
        <chakra.span
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "gray.200",
          }}
        >
          imdbID: {title.imdbID}
        </chakra.span>
        <chakra.button
          bg="gray.800"
          fontSize="xs"
          fontWeight="bold"
          color="white"
          px={2}
          py={1}
          rounded="lg"
          textTransform="uppercase"
          _hover={{
            bg: "gray.700",
            _dark: {
              bg: "gray.600",
            },
          }}
          _focus={{
            bg: "gray.700",
            _dark: {
              bg: "gray.600",
            },
            outline: "none",
          }}
        >
          <chakra.span>{title.Year}</chakra.span>
        </chakra.button>
      </Flex>
    </Box>
  </Flex>
</Flex>
  )
}

export default SmallCard