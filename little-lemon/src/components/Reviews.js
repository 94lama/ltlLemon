import React from 'react';
import { Card, CardBody, CardFooter, Text, Heading, Flex, Avatar, Grid } from "@chakra-ui/react";
import StarRating from "./Stars";

function Reviews (props) {
    return(
    <Card variant='outline' width='800px' borderRadius='50px' margin='10px' backgroundColor='#eeee' height='350px' flexShrink='0'>
        <CardBody flex=''>
            <Flex justifyContent='space-between' alignItems='center'>
                <Avatar name={props.name} src={props.img} height='200px' width='200px' margin='10px'/>
                <Grid>
                    <Heading as='h2' size='lg' margin='10px'>{props.title}</Heading>
                    <Text as='p' noOfLines='5'>{props.description}</Text>
                </Grid>
            </Flex>
        </CardBody>
        <CardFooter justifyContent='center'>
            <StarRating />
        </CardFooter>
    </Card>)}

export default Reviews;