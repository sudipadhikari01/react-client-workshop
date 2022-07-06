import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar,Container,Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <div>
    <ul>
        <li>
            <Link to="/todos">Todos</Link>
        </li>
        <li>
            <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
     
    </>
  )
}

export default Header;