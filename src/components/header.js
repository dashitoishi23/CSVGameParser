import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
<nav class="navbar " style={{backgroundColor:'blue'}}>
  <Link className = "navbar-brand" to="/" style={{color:'white'}}>Games Portal</Link>
  <ul className="nav justify-content-end">
  <li className="nav-item">
   <Link className = "nav-link" to="/sort" style={{color:'white'}}>SortTheList</Link>
  </li>
  <li className="nav-item">
  <Link className = "nav-link" to="/search" style={{color:'white'}}>SearchByName</Link>
  </li>
  </ul>
</nav>
    )
}

export default Header;