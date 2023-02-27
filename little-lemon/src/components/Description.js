import { Text, position } from "@chakra-ui/react";
import restaurant from "../assets/icons_assets/restauranfood.jpg";

function Description() {

    function openForm() {document.getElementById("myForm").style.display="block"}
    function closeForm() {document.getElementById("myForm").style.display='none'}

    return (
        <div className="description">
            <section className="textDesc">
                <text className="Title">Little Lemon</text><br />
                <text className="WhereAreWe">Chicago, somewhere st.</text>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </section>
            <div className="imgDesc">
                <img src={restaurant} alt="A dish serving" className="imgSqrd" />
            </div>

            <div>
                <button class="button" id='open-button' onClick={openForm}>Book a table</button>
                <div class="form-popup" id="myForm">
                    <form class="form-container">
                        <Text color='#fff'>Hello!</Text>
                        <label>
                            <Text color='#fff' alignSelf='center'>I, </Text>
                            <input type="text" placeholder="Your name" name="name" required />
                        </label>
                        <Text textTransform='uppercase' color='#fff' alignSelf='center'>Would like to reserve a table</Text>
                        <label>
                            <Text textTransform='uppercase' color='#fff' alignSelf='center'>for</Text>
                            <input type="people" placeholder="N. of people" name="people" required type='number'/>
                        </label>
                        <label>
                            <Text textTransform='uppercase' color='#fff' alignSelf='center'>in</Text>
                            <input type="day" placeholder="Choose a day" name="day" required type='date' />
                        </label>
                        <label>
                            <Text textTransform='uppercase' color='#fff' alignSelf='center'>at</Text>
                            <input type="hour" placeholder="When" name="hour" required type='time' />
                        </label>
                        <Text textTransform='uppercase' color='#fff'>Please, contact me</Text>
                        <label>
                            <Text textTransform='uppercase' color='#fff' alignSelf='center'>at</Text>
                            <input type="mail" placeholder="Your mail" name="mail" required type='email' />
                        </label>
                        <button type="submit" class="button">Reserve</button>
                        <button type="close" class="button" onclick={closeForm}>Close</button>
                    </form>
                </div>
            </div>
        </div>
    );}

    export default Description;