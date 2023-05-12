// import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="md:mx-24">
      <ul>
        <Link className="text-xl mr-5" to="/">
          Home
        </Link>
        <Link className="text-xl mr-5" to="/add-coffee">
          Add Coffee
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
