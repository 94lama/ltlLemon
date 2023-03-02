import React from "react"
import { date, Options } from "./BookingForm.js";
//import {date, Options, day} from './formData'

class BookingSlot extends React.Component {
    constructor() {
        super();
        this.state = { selectValue: '' };  // initial state value
    }

    render() {
        return (
            <div>
                <select type='time' class="hour" id="res-time" required>
                    {Options.map((option) => <option id={option.id} disabled={option.disabled}>{option.id}</option>)}
                </select>
            </div>)
    }
}

export default BookingSlot;
