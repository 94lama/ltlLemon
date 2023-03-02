import logo from '../assets/icons_assets/Logo.svg';
import logo_ from '../assets/icons_assets/Logo .svg';
import { Text } from '@chakra-ui/react';
import Description from './Description';
import hour from './Description';

function Nav () {
    function openForm() {document.getElementById("myBooking").style.display="block"}
    function closeForm() {document.getElementById("myBooking").style.display='none'}
    function changeBooking() {document.getElementById('myForm').style.display='block'}

    return (
    <div className='App-header'>
        <a href={'/'}>
            <source srcSet={logo} media="(min-width: 901px)"/>
            <source srcSet={logo_} media="(max-width: 901px)"/>
            <img src={logo_} alt="Little Lemon logo" height="110px" className='App-logo'/>
        </a>
        <ul className="grid-container">
            <a href='/about' className='App-link'><h2>About</h2></a>
            <a href='/menu' className='App-link'><h2>Menu</h2></a>
            <a href='/reservations' className='App-link'><h2>Reservations</h2></a>
            <a href='/online' className='App-link'><h2>Order online</h2></a>
        </ul>
        <div>
                <button class="button" id='open-button' onClick={openForm}>Login</button>
                <div className="form-popup" id="myBooking">
                    <form class="form-status">
                        <Text alignSelf='center'>{Description.hour}</Text>
                        <Text textTransform='uppercase' alignSelf='center'>Name</Text>
                        <Text textTransform='uppercase' alignSelf='center'>people</Text>
                        <Text textTransform='uppercase' alignSelf='center'>date</Text>
                        <Text textTransform='uppercase' alignSelf='center'>{hour}</Text>
                        <Text textTransform='uppercase' alignSelf='center'>mail</Text>
                        <button type="submit" class="button" onClick={changeBooking}>Change</button>
                        <button type="close" class="button" onclick={closeForm}>Close</button>
                    </form>
                </div>
            </div>
    </div>
)}

export default Nav;