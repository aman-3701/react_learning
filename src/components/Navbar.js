import React from 'react'
export default function Navbar(props) {
    return(
       <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">{props.title}</a>
  {/* <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      
      
      <li className="nav-item">
        <a className="nav-link disabled" href="/" tabIndex="-1" >{props.about}</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
       </>
    );
}
// Navbar.propsTypes = {
//     title: PropTypes.string,
//     about: PropTypes.string
// }