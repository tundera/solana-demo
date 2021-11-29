import { Center, Spinner } from '@chakra-ui/react'

export const FullPageSpinner = () => {
  return (
    <Center minH="100vh" width="100vw">
      <Spinner />
    </Center>
  )
}
