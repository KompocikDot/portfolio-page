import { Tab, TabList } from "@chakra-ui/react";

function Navbar(): JSX.Element {
    return (
        <TabList h="5vh" bg={'eerie-black'}>
            <Tab>About</Tab>
            <Tab>My work</Tab>
            <Tab>Worth reading</Tab>
            <Tab>Contact</Tab>
        </TabList>
    );
} 

export { Navbar };