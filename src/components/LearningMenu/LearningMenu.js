import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class LearningMenu extends Component{
  constructor(){
    super()
    this.state = {
      showMenu: false
    }
  }

  showMenu = (e) => {
    e.preventDefault()
    this.setState({
      showMenu: true
    }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu = (e) => {
    this.setState({showMenu: false}, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }

  render(){
    return(
      <div>
          <div className='navbar-button' onMouseOver={this.showMenu}>Learning</div>
          {
            this.state.showMenu
              ? (
                <div className='dropdown' onMouseLeave={this.closeMenu}
                ref={(element) => {
                  this.dropdownMenu = element
                }}
                >
                  <Link to='/howtouse' className='navbar-button'>
                    How to Use
                  </Link>
                  <br/>
                  <Link to='/glossary' className='navbar-button'>
                    Glossary
                  </Link>
                  <br/>
                  <Link to='/checklists' className='navbar-button'>
                    Checklists
                  </Link>
                  <br/>
                  <Link to='/introvideos' className='navbar-button'>
                    Intro Videos
                  </Link>
                  <br/>
                  <Link to='/labexamples' className='navbar-button'>
                    Lab Examples
                  </Link>
                  <br/>
                </div>
              )
              : (
                null
              )
          }
      </div>
    )
  }
}
