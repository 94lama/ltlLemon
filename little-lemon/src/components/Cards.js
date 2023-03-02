import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Image, Button, Flex } from "@chakra-ui/react";
import basket from '../assets/icons_assets/basket .svg'


function Specials (props) {
    return (
        <Card variant='outline' maxWidth='24rem' borderRadius='50px' margin='10px' backgroundColor='#eeee' max-height='40rem' flexShrink='0'>
            <CardHeader padding='0'>
                <Image src={props.img} alt="img" borderRadius='50px' minWidth='100%' maxWidth='24rem' height='20rem' objectFit='cover' />
            </CardHeader>
            <CardBody>
                <Flex justifyContent='space-between' height='60px'>
                    <Heading as='h2' size='lg'>{props.title}</Heading>
                    <Heading as='h2' size='lg' color='#666'>{props.price}</Heading>
                </Flex>
                <Text as='p' noOfLines='8'>{props.description}</Text>
            </CardBody>
            <CardFooter justifyContent='right' padding='0 1.5rem 1.5rem 0'>
                <Button _activeLink="/basket" minHeight='20px' maxHeight='50px' padding='0' backgroundColor='transparent'><Image src={basket} /></Button>
            </CardFooter>
        </Card>
    )}

export default Specials;