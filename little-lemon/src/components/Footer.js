import { Heading, Text } from '@chakra-ui/react';
import logoFooter from '../assets/icons_assets/Logo_.svg';

const Footer = () => {
    return (
        <section class='footer'>
            <img src={logoFooter} alt="Restaurant's logo" width='500px'/>
            <section margin='200px'>
                <Heading width='400px' as='h2'>Doormat navigation</Heading>
                <Text width='400px' as='p' noOfLines='8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </section>
            <div>
                <Heading width='400px' as='h2'>Contact info</Heading>
                <Text width='400px' as='p' noOfLines='8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </div>
            <div>
                <Heading width='400px' as='h2'>Social media links</Heading>
                <Text width='400px' as='p' noOfLines='8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </div>
        </section>
    )}

export default Footer;