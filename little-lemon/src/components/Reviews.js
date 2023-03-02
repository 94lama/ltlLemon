import React from 'react';
import { Card, CardBody, CardFooter, Text, Heading, Flex, Avatar, Grid } from "@chakra-ui/react";
import StarRating from "./Stars";

function Reviews (props) {
    return(
    <Card variant='outline' width='600px' maxWidth='95%' borderRadius='50px' margin='10px' backgroundColor='#eeee' max-height='350px' flexShrink='0'>
        <CardBody flex=''>
            <Flex justifyContent='space-between' alignItems='center'>
                <Avatar name={props.name} src={props.img} min-width='50px' minheight='50px' width='10rem' height='10rem' margin='10px'/>
                <Grid minWidth='100px'>
                    <Heading as='h2' size='lg' margin='10px' minWidth='80px'>{props.title}</Heading>
                    <Text as='p' noOfLines='5'>{props.description}</Text>
                </Grid>
            </Flex>
        </CardBody>
        <CardFooter justifyContent='center'>
            <StarRating/>
        </CardFooter>
    </Card>)}

export default Reviews;