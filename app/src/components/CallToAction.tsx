import { Box, Heading, Text } from '@chakra-ui/react'

export const CallToAction = () => (
  <Box as="section">
    <Box
      maxW="2xl"
      mx="auto"
      px={{ base: '6', lg: '8' }}
      py={{ base: '16', sm: '20' }}
      textAlign="center"
    >
      <Heading as="h1" size="3xl" fontWeight="extrabold" letterSpacing="tight">
        LeBron GIF Gallery
      </Heading>
      <Text mt="4" fontSize="lg">
        Collection of GIFs celebrating the greatest of all time.
      </Text>
    </Box>
  </Box>
)
