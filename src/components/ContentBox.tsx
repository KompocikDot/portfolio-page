import { Flex, Spacer, Tabs } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { PageContents } from "./PageContents";


function ContentBox(): JSX.Element {
    return (
        <Flex direction={"column"} height={'100%'} borderColor={'border-jet'} border={'1px'}>
            <Tabs isFitted variant={'line'} colorScheme={'teal'}>
                <Navbar/>
                <Spacer h="5%" bg="white"/>
                <PageContents />
            </Tabs>
        </Flex>
    );
}

export { ContentBox };