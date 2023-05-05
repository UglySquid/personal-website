import {
    Container, SimpleGrid, Flex, Stack, Box,
    Img, Button, Circle,
    Text, Heading,
    extendTheme, ChakraProvider, chakra, shouldForwardProp,
    Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Icon,
} from '@chakra-ui/react';

import React, { ReactElement } from 'react';
import { isValidMotionProp, motion } from 'framer-motion';

import { TbTriangleInvertedFilled } from 'react-icons/tb'

import "@fontsource/roboto-mono/500.css"

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
'2xl': '96em', // 1536px
}

const Font = extendTheme({
  fonts: {
    Heading: `'Roboto Mono', monospace;`,
  },
})

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })

  return (
    <Container maxW={'5xl'} py={12} centerContent>


      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={'center'}>
        <Stack spacing={4}>
          <ChakraProvider theme={Font}>
            <Heading
              bgGradient='linear(to-r, blue.200, yellow.200, pink.200)'
              bgClip='text'
              fontSize='7xl'
              fontWeight='extrabold'
            >
              Hello There...
              
            </Heading>
          </ChakraProvider>
          <Text color={'white.500'} fontSize={'lg'}>
          I&apos;m Christine! I&apos;m currently a grade 10 student at Milliken Mills High School. 
          In my freetime, I like to read and code. I dunno man I&apos;m kinda basic 😳
          </Text>

          <Button onClick={onOpen}>About Metallic Masquerade</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Anouncement: Metallic Masquerade</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <chakra.p>
                    <Text as='b' fontSize='20px'>Hey Knights, guess what? The annual Sheet Metal Dance is back! </Text>
                  <br />
                  <br />
                  <br />
                  <Text as='b'>When: </Text>
                  Friday, June 30th, 2023, 1pm-8pm
                  <br />
                  <Text as='b'>Where: </Text>
                  Don Mills Steel Factory 
                  <br />
                  <Text as='b'>Ticket Price: </Text>
                  $30 for MMHS Students | $105 for Guests
                  <br />
                  <br />
                  <br />
                  <Text as='i'>
                    Support Milliken&apos;s vibrant sheet metal industry while having a fun night of 
                    food, drinks, and dancing. Yes, the food and drinks will be free.
                  </Text>
                  <br />
                  </chakra.p>
                  
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>I&apos;m in!</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          
        </Stack>
        <Box boxShadow='dark-lg' p='10' rounded='lg' bg={'gray.700'}>    
          <Flex justifyContent={'center'}>
              <Img
                border='3px' 
                borderColor='gray.800'
                rounded={'md'}
                alt={'Currently Nonexistent image'}
                src={
                  'deca.jpg'
                }
                objectFit={'cover'}
                height={{
                  base: '70%',
                  md: '50%', 
                  xs: '25%'
                }}
                // fallbackSrc='https://via.placeholder.com/450x300'
              />
            {/* <canvas class="webgl">
              <script type='module' src='/cat.js'></script>
              </canvas> */}
            {/* 3D Model credit: "ordak the duck" (https://skfb.ly/oEn8s) by ZIRODESIGN is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/). */}
          </Flex>
        </Box>
        

          
      </SimpleGrid>
    </Container>
  );
}
