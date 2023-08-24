import React from "react";
import { Flex, Box, chakra } from "@chakra-ui/react";
import BigCard from "./BigCard";
function SmallCard({ title }) {
  console.log(title)
  if (!title) return;
  return (
    <Flex p={2} w="full" alignItems="center" justifyContent="center">
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
            backgroundImage: `url(${title.Poster})`,
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
            justifyContent="center"
            bg="gray.200"
            _dark={{
              bg: "gray.700",
            }}
          >
            <BigCard title={title}/>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SmallCard;
