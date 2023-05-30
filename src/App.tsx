import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import { MainPage } from './MainPage'

const { Button, Tabs } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Tabs,
  },
})

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <MainPage />
    </ChakraBaseProvider>
  )
}


export default App;
