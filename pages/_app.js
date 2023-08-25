import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {useColorModeScript} from '@chakra-ui/react';
export default function App({ Component, pageProps }) {
  return <ChakraProvider><useColorModeScript initalColorMode="Dark"/><Component {...pageProps} /></ChakraProvider>
}
