import React from 'react'
import logo from './img/logo-svgrepo-com.svg'
import './styles.css'
import Button from '../button'
import CartWidget from '../cartWidget'
import { Link } from 'react-router-dom'
import User from '../../pages/user_detail'
import ItemDetailContainer from '../itemDetailContainer'

function Navbar({onHandlerClick , user}) {

  return (
    <nav className="navbar navbar-expand-lg bg-light ">
    <div className="container-fluid container_nav ">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item cart_container">
            {/* <a className="active" aria-current="page" href="#"><img className='logo' src={logo} alt="/" /></a> */}
            <Link  to='/'><img className='logo' src={logo} alt="logo" /></Link>
          </li>
      
          <Link className="nav-item " to='categories/computers'>
            <a className="nav-link active" aria-current="page" href="#">Computers </a>
          
            </Link>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Shoes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Industrial</a>
          </li>   
          <li className="nav-item">
            <a className="nav-link active more_categories" aria-current="page" href="#">more categories </a>
          </li>   
          <form role={'search'} className='d-flex container_input_search form_search'>
            <input type="search me-2" placeholder="Search" aria-label="Search" className='bg-light input_search'></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" onClick={onHandlerClick}><CartWidget/>  </a>
          </li>
          <li className="nav-item container_avatar">
          
          <Link to={'/user'}  src={user?.avatar}  alt={user?.name}>
            <img className='user_avatar' src= {user?.avatar}  alt="" />

           </Link>
            
          
          </li> 

      </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar

// categories (51) ['Home', 'Home', 'Computers', 'Shoes', 'Shoes', 'Industrial', 'Automotive', 'Clothing', 'Computers', 'Clothing', 'Movies', 'Tools', 'Computers', 'Baby', 'Movies', 'Sports', 'Outdoors', 'Home', 'Books', 'Beauty', 'Games', 'Clothing', 'Automotive', 'Automotive', 'Books', 'Clothing', 'Shoes', 'Home', 'Health', 'Electronics', 'Games', 'Games', 'Garden', 'Home', 'Movies', 'Garden', 'Tools', 'Kids', 'Books', 'Tools', 'Tools', 'Books', 'Music', 'Kids', 'Automotive', 'Books', 'Industrial', 'Toys', 'Baby', 'Jewelery', 'Games']