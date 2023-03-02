import BookingForm from "./BookingForm";
import React from "react";
import restaurant from "../assets/icons_assets/restauranfood.jpg";

function Description() {

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
           <BookingForm />
        </div>
    );}

    export default Description;