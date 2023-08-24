import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {useColorModeScript} from '@chakra-ui/react';
import Theme from './Theme';
export default function App({ Component, pageProps }) {
  return <ChakraProvider><useColorModeScript initialColorMode={Theme.initialColorMode}/><Component {...pageProps} /></ChakraProvider>
}
