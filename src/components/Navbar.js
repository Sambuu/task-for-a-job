import React from 'react';

function Navbar(){
    return(
    <div className="nav-area">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light  w-100">   
         <a className="navbar-brand" href="#">LOGO</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
           <ul className="navbar-nav">
            <li className="nav-item active"><a className="nav-link" href="#section1">Home</a></li>
            <li className="nav-item active"><a className="nav-link" href="#section2">About</a></li>
            <li className="nav-item active"><a className="nav-link" href="#section3">Contact us</a></li>
            <li className="nav-item active"><a className="nav-link" href="#section4">Share</a></li>
           </ul>
         </div>
        </nav>  
      </div>
    </div>  
    );
}
export default Navbar;