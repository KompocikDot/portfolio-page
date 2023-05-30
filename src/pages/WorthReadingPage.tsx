import { Button, Card, CardBody, Link } from "@chakra-ui/react";

function WorthReading(): JSX.Element {
    return (
        <>
            <Card>
                <Button>
                    <CardBody>
                        <Link href="https://programmingpercy.tech/blog/free-secure-self-hosting-using-cloudflare-tunnels/">Self hosting using cloudflare tunnels by: programmingpercy</Link>
                    </CardBody>
                </Button>
            </Card>
            <Card size='sm'>
                <Button>
                    <CardBody>
                        <Link href="https://atlaslogics.github.io/antibot/On-Anti-Bot-Biometric-Protections.md/">Anti-Bot Biometric Protections by: Atlas</Link>
                    </CardBody>
                </Button>
            </Card>
        </>
    )
}

export { WorthReading };