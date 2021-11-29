import { Button, Center, Img, SimpleGrid, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import { NewGifForm } from 'src/components'
import { useGifCollection } from 'src/hooks'

type GifCollectionProps = {
  walletAddress: string
}

export const GifCollection = ({ walletAddress }: GifCollectionProps) => {
  const { gifs, createGifAccount, addNewGif } = useGifCollection(walletAddress)

  return gifs ? (
    <Stack experimental_spaceY="2" align="center">
      <NewGifForm handleSubmitGif={addNewGif} />
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {gifs?.map((gif) => (
          <Center
            key={gif.gifLink}
            py="8"
            px="8"
            bg={mode('gray.50', 'gray.800')}
            rounded={{ md: 'lg' }}
          >
            <Img
              src={gif.gifLink}
              alt={gif.gifDesc}
              w="64"
              h="64"
              rounded="lg"
              objectFit="cover"
              zIndex="1"
            />
          </Center>
        ))}
      </SimpleGrid>
    </Stack>
  ) : (
    <Center>
      <Button onClick={createGifAccount}>Do One-Time Initialization For GIF Program Account</Button>
    </Center>
  )
}
