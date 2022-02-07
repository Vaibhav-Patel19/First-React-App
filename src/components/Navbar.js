// import logo from './logo.png';
import logo from '../images/logo.png'
import '../styles.css';

export default function Header() {
    return(
            <nav className="nav"> 

                <img src={logo} className="react-logo" alt="logo" />
                <h3> React Facts </h3>

                <h4>React Course - Project 1</h4>
            </nav>
    )
}