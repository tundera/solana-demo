import { Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ColorModeToggle = () => {
  const SwitchIcon = useColorModeValue(FiMoon, FiSun)
  const { toggleColorMode } = useColorMode()

  return (
    <>
      <Flex order={{ base: 2, md: 1 }}>
        <IconButton
          isRound
          size="sm"
          fontSize="xl"
          aria-label="Show notification"
          variant="ghost"
          color="current"
          icon={<SwitchIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </>
  )
}
