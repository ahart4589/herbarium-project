import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class NamesMenu extends Component{
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
          <div className='navbar-button' onMouseOver={this.showMenu}>Names</div>
          {
            this.state.showMenu
              ? (
                <div className='dropdown' onMouseLeave={this.closeMenu}
                ref={(element) => {
                  this.dropdownMenu = element
                }}
                >
                  <Link to='/taxontree'className='navbar-button'>
                    Taxonomic Tree
                  </Link>
                  <br/>
                  <Link to='/publications' className='navbar-button'>
                    Publications
                  </Link>
                  <br/>
                  <Link to='/namechangeexp' className='navbar-button'>
                    Name Change Explanations
                  </Link>
                  <br/>
                  <Link to='/whynameschange' className='navbar-button'>
                    Why Names Change
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
