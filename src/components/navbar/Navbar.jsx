import './navbar.css'
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav>
      <ul>
        <li>
        <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    </div>
    
    
  )
}


