import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  chakra,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import SmallCard from "./SmallCard";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [MovieSearch, SetMovieSearch] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const API_URL = "https://omdbapi.com?apikey=fe2f6c44";

  const Fetchmovies = async (e, Moviename) => {
    e.preventDefault();
    setIsLoading(true);
    SetMovieSearch("");
    const MoviesData = await fetch(`${API_URL}&s=${Moviename}`);
    const data = await MoviesData.json();
    setMovies(data.Search);
    setIsLoading(false);
  };
  useEffect(() => {
    Fetchmovies(
      {
        preventDefault: () => {},
      },
      "avengers"
    );
  }, []);

  const inputTheam = {
    sm: "150px",
    md: "250px",
    lg: "500px",
  };

  return (
    <chakra.div pt={10}>
      <Flex
        justifyContent={"center"}
        alignItems="center"
        direction={"column"}
        gap={6}
      >
        <Heading as="h5" color="#854ce6" fontFamily={"cursive"}>
          Search for your favorite movies!
        </Heading>
        <form onSubmit={(e) => Fetchmovies(e, MovieSearch)}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            direction={["column", "row"]}
          >
            <InputGroup>
              <InputLeftElement color={"blue"} bgSize={"contain"}>
                <MdOutlineScreenSearchDesktop />
              </InputLeftElement>
              <Input variant={"filled"}
                value={MovieSearch}
                type="text"
                placeholder="Enter Movie name"
                width={inputTheam}
                onChange={(e) => {
                  SetMovieSearch(e.target.value);
                }}
              />
            </InputGroup>
            <Button
              width={"120px"}
              loadingText={isloading ? "Fetching..." : ""}
              isLoading={isloading}
              type="submit"
              colorScheme="blue"
            >
              Search
            </Button>
          </Flex>
        </form>{" "}
      </Flex>
      {movies?.length > 0 ? (
        <SimpleGrid pt={"20px"} minChildWidth="250px" spacing="40px">
          {movies.map((name) => (
            <SmallCard key={name} title={name} />
          ))}
        </SimpleGrid>
      ) : (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <chakra.p
            color={"red"}
            fontSize={"lg"}
            fontWeight="bold"
            fontFamily={"monospace"}
            pt={10}
          >
            searching for a movie is not found!
          </chakra.p>
        </Flex>
      )}
    </chakra.div>
  );
}

export default Movies;
