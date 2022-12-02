import React from 'react'
import logo from './img/logo-svgrepo-com.svg'
import './styles.css'
import Button from '../button'


function Navbar({onHandlerClick}) {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
    <div className="container-fluid container_nav ">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">


           <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Vehículos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inmuebles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Tecnología</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Electrodomésticos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">ver más categorías </a>
          </li>
    
          <form role={'search'} className='d-flex container_input_search'>
            <input type="search me-2" placeholder="Search" aria-label="Search" className='bg-light input_search'></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" onClick={onHandlerClick}>🛒</a>
          </li>
      </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar