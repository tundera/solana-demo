import '@fontsource/fira-code'
import '@fontsource/inter'

import { ColorModeScript } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom'
import App from 'src/App'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>,
)
