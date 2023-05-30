import { TabPanel, TabPanels } from "@chakra-ui/react";
import { AboutPage } from "../pages/AboutPage";
import { MyWork } from "../pages/MyWorkPage";

function PageContents(): JSX.Element {
    return (
        <TabPanels  h="80vh" bg='dark-blue' color='white'>
            <TabPanel>
                <AboutPage/>
            </TabPanel>
            <TabPanel>
                <MyWork/>
            </TabPanel>
            <TabPanel><p>Worth reading</p></TabPanel>
            <TabPanel><p>Contact</p></TabPanel>
        </TabPanels>
    );
}

export { PageContents };