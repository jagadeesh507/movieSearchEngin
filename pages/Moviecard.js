import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  filter,
} from "@chakra-ui/react";
import Movies from "./Movies";
import Link from "next/link";
function Moviecard({ title }) {
  if (!title) return;
  return (
    <Center py={12}>
      <Box
      
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${title.Poster})`,

            zIndex: -1,
          }}
        >
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {title.Type}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title.Title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
             ImdbId :{ title.imdbID }
            </Text>
            <Text textDecoration={"underline"} color={"gray.600"}>
              Year :{ title.Year }
            </Text>
          </Stack>
        </Stack>
       <Flex alignItems={"center"} justifyContent={"center"} border={"1px solid"} padding={"10px"} m={"10px"}>
       <Link href={`https://www.google.com/search?q=${title.imdbID}&rlz=1C1ONGR_enIN1060IN1060&oq=t4154756&aqs=chrome..69i57j0i546l2.1134j0j7&sourceid=chrome&ie=UTF-8` }target="_blank">Search in google</Link>
       </Flex>
      </Box>
    </Center>
  );
}

export default Moviecard;
