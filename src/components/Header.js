// import logo from './logo.png';
import logo from '../images/logo.png'

export default function Header() {
    return(
        <header>
                <nav className="nav"> 
                    <img src={logo} className="nav-logo" alt="logo" />

                    <ul className="nav-items">
                        <li>Pricing </li>
                        <li> About </li>
                        <li> Contact </li>
                    </ul>
                </nav>
        </header>
    )
}