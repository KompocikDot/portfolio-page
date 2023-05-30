import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import { MainPage } from './pages/MainPage'


const { Tabs } = chakraTheme.components

const theme = extendBaseTheme({
  colors: {
    'dark-blue': '#27374D',
    'accent-teal': '#526D82',
    'light-teal': '#9DB2BF',
    'smoke-blue': '#DDE6ED',
    'border-jet' : '#383838',
    'eerie-black': '#1E1E1F',
  },
  components: {
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
