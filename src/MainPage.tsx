import { Center, Box} from '@chakra-ui/react'
import { ContentBox } from './ContentBox';

function MainPage(): JSX.Element {
    return <>
        <Center h="100vh" w="100%">
            <Box borderRadius={'2xl'} bg="gray" h="85vh" w="85%">
                <ContentBox />
            </Box>
        </Center>
    </>;
}

export { MainPage };