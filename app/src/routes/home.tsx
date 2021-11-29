import { Button, Flex, Stack, usePrefersReducedMotion } from '@chakra-ui/react'
import { CallToAction } from 'src/components/CallToAction'
import { GifCollection } from 'src/components/GifCollection'
import { PhantomLogo } from 'src/components/PhantomLogo'
import { usePhantomWallet } from 'src/hooks/usePhantomWallet'

const Home = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const { walletAddress, connectWallet } = usePhantomWallet()
  return (
    <Stack as="main" experimental_spaceY="4" align="center" py="8">
      <Flex justify="center" align="center" minH="full">
        <PhantomLogo
          w="40"
          h="40"
          animate={{
            rotate: prefersReducedMotion ? 0 : 360,
            scale: prefersReducedMotion ? 1 : [1, 0.75, 1],
            transition: { duration: 10, repeat: Infinity, times: [0, 5, 10] },
          }}
        />
      </Flex>
      <CallToAction />
      {walletAddress ? (
        <GifCollection walletAddress={walletAddress} />
      ) : (
        <Button onClick={connectWallet}>Connect to Wallet</Button>
      )}
    </Stack>
  )
}

export default Home
