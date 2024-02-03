import { Link } from 'react-router-dom';

const Header = () => {



    return (
        <div>
            <nav>
                <ul>
                    <Link to="/"><li></li>Home</Link>
                    <Link to="/books"><li>Books</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/blogs"><li>Blogs</li></Link>
                    <Link to="/extras"><li>Extras</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/signup"><li>Signup</li></Link>
                </ul>
            </nav>
        </div>
    )
};

export default Header;