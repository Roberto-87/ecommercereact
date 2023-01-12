import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function DropDown() {
  return (

        <div class="dropdown">
              <button class="btn btn-secondary bg-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                More categories
              </button>
              <ul class="dropdown-menu bg-dark">
                <Link  to='categories/automotive' ><a class="dropdown-item" href="#">Automotive</a></Link>
                
                <Link to='categories/clothing'>
                  <a class="dropdown-item" href="#">Clothing</a>
                </Link>
                <Link to='categories/movies'>
                  <a class="dropdown-item" href="#">Movies</a>
                </Link>
                <Link to='categories/tools'>
                  <a class="dropdown-item" href="#">Tools</a>
                </Link>
                <Link to='categories/baby'>
                  <a class="dropdown-item" href="#">Baby</a>
                </Link>
                <Link to='categories/sports'>
                  <a class="dropdown-item" href="#">Sports</a>
                </Link>
                <Link to='categories/outdoors'>
                  <a class="dropdown-item" href="#">Outdoors</a>
                </Link>
                <Link to='categories/books'>
                  <a class="dropdown-item" href="#">Books</a>
                </Link>
                <Link to='categories/beauty'>
                  <a class="dropdown-item" href="#">Beauty</a>
                </Link>
                <Link to='categories/games'>
                  <a class="dropdown-item" href="#">Games</a>
                </Link>
                <Link to='categories/health'>
                  <a class="dropdown-item" href="#">Health</a>
                </Link>
                <Link to='categories/electronics'>
                  <a class="dropdown-item" href="#">Electronics</a>
                </Link>
                <Link to='categories/garden'>
                  <a class="dropdown-item" href="#">Garden</a>
                </Link>
                <Link to='categories/kids'>
                  <a class="dropdown-item" href="#">Kids</a>
                </Link>
                <Link to='categories/music'>
                  <a class="dropdown-item" href="#">Music</a>
                </Link>
                <Link to='categories/toys'>
                  <a class="dropdown-item" href="#">Toys</a>
                </Link>
                <Link to='categories/jewelery'>
                  <a class="dropdown-item" href="#">Jewelery</a>
                </Link>      
                </ul> 
                </div>
        

  )
}

export default DropDown