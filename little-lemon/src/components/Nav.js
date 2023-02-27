import logo from '../assets/icons_assets/Logo.svg'
import logo_ from '../assets/icons_assets/Logo .svg'

function Nav () {
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
        <h2>Login</h2>
    </div>
)}

export default Nav;