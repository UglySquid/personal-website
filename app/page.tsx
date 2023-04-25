"use client"

import {
  Flex,
  ChakraProvider,
  Skeleton,
  extendTheme,
} from '@chakra-ui/react'
  
import Hero from '@/components/hero'
import Works from '@/components/works'
import About from '@/components/about'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  }
});

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <title>Christine Wei :D</title>
        <link rel="icon" type="image/x-icon" href="imsobbingnow.png"/>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Flex height="100%" alignItems="center" justifyContent="center">
            <Flex direction="column" background="grey.100" p={12} rounded={6} gap={150}>
                <Nav />

                <Hero />

                <Skeleton startColor='blue.200' endColor='yellow.50' height='10px' />
                
                <About />

                <Skeleton startColor='blue.200' endColor='yellow.50' height='10px' />

                <Works />

                <Footer />
            </Flex>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  )
}
