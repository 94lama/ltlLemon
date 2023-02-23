import logo from '../assets/icons_assets/restauranfood.jpg'

function Description () {
    return (
    <section>
        <div className="description">
            <section className="textDesc">
                <text className='Title'>Little Lemon</text>
                <br/>
                <text className='WhereAreWe'>Chicago, somewhere st.</text>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </section>
            <button><h2>Book a table</h2></button>
            <div className='imgDesc'>
                <img src={logo} alt="A dish serving" className="imgSqrd"/>
            </div>
        </div>
        <hr className='line' width='95%'/>
    </section>)
}

export default Description;