import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class IdResourcesMenu extends Component{
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
          <div className='navbar-button' onMouseOver={this.showMenu}>Id Resources</div>
          {
            this.state.showMenu
              ? (
                <div className='dropdown' onMouseLeave={this.closeMenu}
                ref={(element) => {
                  this.dropdownMenu = element
                }}
                >
                  <Link to='/checklists' className='navbar-button'>
                    Checklists
                  </Link>
                  <br/>
                  <Link to='/dichotomouskeys' className='navbar-button'>
                    Dichotomous Keys
                  </Link>
                  <br/>
                  <Link to='/multiaccesskeys' className='navbar-button'>
                    Multi-Access Keys
                  </Link>
                  <br/>
                  <Link to='/symbiotakeys' className='navbar-button'>
                    Symbiota Keys
                  </Link>
                  <br/>
                  <Link to='/taxondescriptions' className='navbar-button'>
                    Taxon Descriptions
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
