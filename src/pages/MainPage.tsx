import { Center, Box} from '@chakra-ui/react'
import { ContentBox } from '../components/ContentBox';

function MainPage(): JSX.Element {
    return (
        <div className='back-body'>
            <Center h="100vh" w="100%">
                <Box h="85vh" w="85%" color='white'>
                    <ContentBox />
                </Box>
            </Center>
        </div>
    );
}

export { MainPage };