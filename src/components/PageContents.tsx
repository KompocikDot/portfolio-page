import { TabPanel, TabPanels } from "@chakra-ui/react";
import { AboutPage } from "../pages/AboutPage";
import { MyWork } from "../pages/MyWorkPage";
import { WorthReading } from "../pages/WorthReadingPage";
import { Contact } from "../pages/ContactPage";

function PageContents(): JSX.Element {
    return (
        <TabPanels  h="80vh" bg='dark-blue' color='white'>
            <TabPanel>
                <AboutPage/>
            </TabPanel>
            <TabPanel>
                <MyWork/>
            </TabPanel>
            <TabPanel><WorthReading/></TabPanel>
            <TabPanel><Contact/></TabPanel>
        </TabPanels>
    );
}

export { PageContents };