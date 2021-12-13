import {Container, Image, Text} from "@chakra-ui/react";
import BgUrl from "../assets/inventory-management-software-500x500.png"

export default function HomePage() {
    return (
        <div>
            <Container centerContent={true}>
                <Image mt={"40px"} src={BgUrl}/>
                <Text mt={"20px"} fontSize={"1.5em"}>
                    Web service for simplified item stock management with several innovative exchange rate and item
                    packing calculation systems
                </Text>
                <Text mt={"30px"}>
                    Cedric Cepeda · Louis Brahimi · Matthis Cusin · Noemie Deraedt · Lilian Verlhac
                </Text>
            </Container>
        </div>
    );
}
