import { Box, Center, useColorModeValue as mode } from '@chakra-ui/react'

import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { NavLink } from './NavLink'
import { UserProfile } from './UserProfile'

export const Header = () => (
  <Box
    bg={mode('gray.50', 'gray.700')}
    zIndex="10"
    position="sticky"
    w="full"
    top={0}
    sx={{
      '@supports (backdrop-filter: saturate(1.8) blur(5px))': {
        backdropFilter: 'saturate(1.8) blur(5px)',
      },
      '@supports (-webkit-backdrop-filter: saturate(1.8) blur(5px))': {
        WebkitBackdropFilter: 'saturate(1.8) blur(5px)',
      },
      '@supports not (backdrop-filter: saturate(1.8) blur(5px))': {},
    }}
  >
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd="10">
          <Logo h="6" iconColor={mode('blue.600', 'blue.300')} />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
        <NavLink isActive>Start</NavLink>
      </Navbar.Links>
      <Navbar.UserProfile>
        <UserProfile
          name="Christian Schröter"
          avatarUrl="https://ca.slack-edge.com/T024F7F15-UJVQ359SP-81fc55875723-512"
          email="mail@chidori-ui.com"
        />
      </Navbar.UserProfile>
    </Navbar>
  </Box>
)
