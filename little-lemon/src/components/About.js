import { Grid, Heading, Text } from "@chakra-ui/react";
import owners1 from '../assets/icons_assets/Mario and Adrian A.jpg';
import owners2 from '../assets/icons_assets/Mario and Adrian b.jpg';

const About = () => {
    return (
        <div className="about">
            <Grid alignContent='center' margin='50px' width='600px' className="text">
                <Heading>Little Lemon</Heading>;
                <Heading>Chicago, Somewhere st.</Heading>;
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>;
            </Grid>
            <section classname='imgs'>
                <img class='img1' src={owners1} alt="Owners 1" />
                <img class='img2' src={owners2} alt='Owners 2'/>
            </section>
        </div>
    )
}

//export default About;
export default About;
