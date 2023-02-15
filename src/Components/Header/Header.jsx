import React from 'react'

import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im"
const Header = () => {
  return (
        <nav className="header">
            <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' alt="" /> 
            <div>
                <Link to="/tvshows">TV Shows</Link>
                <Link to="/Movies">Movies</Link>
                <Link to="/RecentlyAdded">Recently Added</Link>
                <Link to="/MyList">My List</Link>
            </div>
            <ImSearch />
        </nav>
  )
}

export default Header