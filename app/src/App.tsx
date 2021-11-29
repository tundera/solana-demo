import { Center, ChakraProvider, Text } from '@chakra-ui/react'
import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FullPageSpinner } from 'src/components/FullPageSpinner'
import { theme } from 'src/styles/theme'

const Layout = lazy(() => import('src/layouts/MainLayout'))
const Home = lazy(() => import('src/routes/home'))

const App = () => {
  return (
    <ErrorBoundary
      fallback={
        <Center minH="100vh" width="100vw">
          <Text>Error loading page. Try refreshing to load again.</Text>
        </Center>
      }
    >
      <Suspense fallback={<FullPageSpinner />}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
