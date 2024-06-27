import React from 'react'

const Navbar = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    <a className="navbar-brand" >Elementary Mastery</a>
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Quize
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" >Puzzle</a></li>
            <li><a className="dropdown-item" >Test</a></li>
            <li><a className="dropdown-item" >Quize Question</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


          
    </>
  )
}

export default Navbar