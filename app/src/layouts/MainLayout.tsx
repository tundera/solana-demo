import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Header } from 'src/components'

const MainLayout = () => {
  return (
    <Flex as="main" direction="column" align="center" minH="100vh" w="full">
      <Header />
      <Flex as="main" direction="column" align="center" w="full">
        <Outlet />
      </Flex>
    </Flex>
  )
}

export default MainLayout
