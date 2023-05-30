import { TabPanel, TabPanels } from "@chakra-ui/react";

function PageContents(): JSX.Element {
    return (
        <TabPanels borderRadius={'xl'}  h="80vh" bg="red">
            <TabPanel borderRadius={'xl'}><p>Main</p></TabPanel>
            <TabPanel borderRadius={'xl'}><p>My work</p></TabPanel>
            <TabPanel borderRadius={'xl'}><p>Worth reading</p></TabPanel>
            <TabPanel borderRadius={'xl'}><p>About Me</p></TabPanel>
        </TabPanels>
    );
}

export { PageContents };