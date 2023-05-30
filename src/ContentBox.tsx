import { Box, Flex, Spacer, Tabs } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { PageContents } from "./PageContents";

function ContentBox(): JSX.Element {
    return (
        <Flex direction={"column"} height={'100%'}>
            <Tabs isFitted variant={'solid-rounded'} colorScheme='orange'>
                <Navbar/>
                <Spacer h="5%" bg="white"/>
                <PageContents />
            </Tabs>
        </Flex>
    );
}

export { ContentBox };