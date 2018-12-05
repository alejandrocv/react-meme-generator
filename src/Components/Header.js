import React from 'react';

function Header(props) {
  return <div className="navbar navbar-dark bg-dark">

    <h2 style={{ color: "white" }}>{props.title}</h2>
    <img
      src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
      alt=""
    />
  </div>
}


export default Header;