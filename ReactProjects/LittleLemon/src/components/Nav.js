import logo from '../assets/icons_assets/Logo.svg'
import logo_ from '../assets/icons_assets/Logo_.svg'

function Nav () {
    return (
    <nav className='navigator'>
        <div>
            <source srcSet={logo} media="(min-width: 901px)"/>
            <source srcSet={logo_} media="(max-width: 901px)"/>
            <img src={logo_} alt="Little Lemon logo" height="110px"/>
        </div>
        <ul className="grid-container">
            <h2>About</h2>
            <h2>Menu</h2>
            <h2>Reservations</h2>
            <h2>Order online</h2>
        </ul>
        <h2>Login</h2>
    </nav>
)}

export default Nav;