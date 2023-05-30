import { Heading, Link, Text } from "@chakra-ui/react";

function Contact(): JSX.Element {
    return (
        <>
            <Text>Email: kacper.soczko@gmail.com</Text>
            <Text>Phone: +48 535025380</Text>
            
            <Heading>
                <Text><Link isExternal href="https://linkedin.com/in/kacper-soczko">LinkedIn</Link></Text>
                <Text><Link isExternal href="https://github.com/KompocikDot">Github</Link></Text>
            </Heading>
        </>
    );
}

export { Contact };