import React from 'react';

function Header(props) {
  return <div className="navbar navbar-dark bg-dark">
    <h2 style={{ color: "white" }}>{props.title}</h2>    
  </div>
}


export default Header;
