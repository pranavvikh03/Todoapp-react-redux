import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Components_CSS/Navbar.css';
export default function Navbar() {
    const token = useSelector(state => state.token)
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/" className="Link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="Link">About US</Link>
                    </li>
                    { token!=="invalid"? 
                    <li>
                        <Link to="/logout" className="Link">Logout</Link>
                    </li> : null }
                </ul>
            </nav>
        </>
    );
}
