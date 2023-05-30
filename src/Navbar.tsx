import { Tab, TabList } from "@chakra-ui/react";

function Navbar(): JSX.Element {
    return (
        <TabList h="5vh">
            <Tab>Main</Tab>
            <Tab>My work</Tab>
            <Tab>Worth reading</Tab>
            <Tab>About Me</Tab>
        </TabList>
    );
} 

export { Navbar };