import { Text } from "@chakra-ui/react"
import BookingSlot from "./BookingSlot";
import React from "react";
import { fetchAPI, submitAPI } from './temp.js';
//import {day, date, Options} from './formData'

var Options = [
    {id:'17:00', disabled: false,},
    {id:'18:00', disabled: false,},
    {id:'19:00', disabled: false,},
    {id:'20:00', disabled: false,},
    {id:'21:00', disabled: false,},
    {id:'22:00', disabled: false,},
]

var day;
var date = [{ id: day, time: Options }]

function initializeTimes(e) {
    fetchAPI()
    day = document.getElementById('res-time').value;
    Options = document.getElementById(day).time.value;
    e.preventDefault()

    return date;
}

function availableTimes(e) {
    initializeTimes()
    const hour = document.getElementById('res-time').value;
    var selectobject = document.getElementById("mySelect");
    for (var i=0; i<selectobject.length; i++) {
        if (selectobject.options[i].value === hour)
            selectobject.disabled(i);
        }
    Options.getElementById(hour).disabled=true;
    e.preventDefault()

    return date;
}

function updateTimes(e) {
    e.preventDefault();
    availableTimes();
    date.getElementById(day).time.value = Options;
    submitAPI(date);
    return date;
}


function BookingForm() {

    function openForm (e) {
        e.preventDefault()
        document.getElementById("myForm").style.display="block"};

    function closeForm(e) {
        document.getElementById("myForm").style.display = 'none';
    }

     function sendForm(e) {
        document.getElementsByClassName('AvailableOptions').selected.button.disabled=true;
        date.id = document.getElementById('res-date').value
        date.hour= document.getElementsByName('res-time').onChange
        updateTimes();
        e.preventDefault();}

    return (
        <section>
            <button class="button" id='open-button' onClick={openForm}>Book a table</button>
            <section class="form-popup" id="myForm">
                <form class="form-container">
                    <Text color='#fff'>Hello!</Text>
                    <label for='name'>
                        <Text color='#fff' alignSelf='center'>I, </Text>
                        <input type="text" placeholder="Your name" name="name" /* required */ />
                    </label>
                    <Text textTransform='uppercase' color='#fff' alignSelf='center'>Would like to reserve a table</Text>
                    <label for='guests'>
                        <Text textTransform='uppercase' color='#fff' alignSelf='center'>for</Text>
                        <input type="number" placeholder="N. of people" name="people" min='1' max='10' id="guests" /* required */ />
                    </label>
                    <label for='res-date'>
                        <Text textTransform='uppercase' color='#fff' alignSelf='center'>in</Text>
                        <input type="date" placeholder="Choose a day" name="res-date" required id="res-date" />
                    </label>
                    <label for='res-time'>
                        <Text textTransform='uppercase' color='#fff' alignSelf='center'>at</Text>
                        <BookingSlot onClick={availableTimes}/>
                    </label>
                    <label for='occasion' >
                        <Text textTransform='uppercase' color='#fff' alignSelf='center'>For my</Text>
                        <select id="occasion">
                            <option>Lunch/dinner</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </label>
                    <Text textTransform='uppercase' color='#fff'>Please, contact me</Text>
                    <label for='email'>
                        <Text textTransform='uppercase' color='#fff' alignSelf='center'>at</Text>
                        <input type="email" placeholder="Your mail" name="email" /* required */ />
                    </label>
                    <button type="submit" class="button"  onClick={sendForm }>Reserve</button>
                    <button type='reset' class="button" onClick={closeForm}>Close</button>
                </form>
            </section>
        </section>
    );
}

export default BookingForm;
export {date, Options};