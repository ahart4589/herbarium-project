import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './NavBar.css'
import banner from './plant-banner.jpg'
import LearningMenu from '../LearningMenu/LearningMenu'
import IdResourcesMenu from '../IdResourcesMenu/IdResourcesMenu'
import NamesMenu from '../NamesMenu/NamesMenu'
import Login from '../Login/Login'

class NavBar extends Component{
  render(){
    return(
      <div>
        <div className='banner-container'>
          <img className='banner' src={banner} alt='plant banner'>  
          </img>
          <div className='banner-text'>Herbarium Site</div>
        </div>
        <div className='navbar'>
          {/* change buttons to links */}
          <Link to='/' className='navbar-button'>Home</Link>
          <LearningMenu/>
          <Link to='/floraprojects'className='navbar-button'>Flora Projects</Link>
          <IdResourcesMenu/>
          <NamesMenu/>
          <Link to='/adminlogin' className='navbar-button'>Admin Login</Link>
          <input className='search-bar' placeholder='search flora'></input>
        </div>
      </div>
    )
  }
}
export default NavBar