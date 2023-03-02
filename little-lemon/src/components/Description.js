import BookingForm from "./BookingForm";
import React from "react";
import restaurant from "../assets/icons_assets/restauranfood.jpg";

function Description() {

    return (
        <main className="description">
            <section className="textDesc">
                <h1 className="Title">Little Lemon</h1><br/>
                <h3 className="WhereAreWe">Chicago, somewhere st.</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </section>
            <aside className="imgDesc">
                <img src={restaurant} alt="A dish serving" className="imgSqrd" />
            </aside>
           <BookingForm />
        </main>
    );}

    export default Description;