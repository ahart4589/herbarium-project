import React, {Component} from 'react'

export default class Login extends Component {
  constructor(props){
    super(props)
    
  }

  handleSubmit = (e) => {
    
  }

  render(){
    return(
      <form>
        <label>
          Username:
          <br/>
          <input type="text" ref={(input) => this.input = input}/>
        </label>
        <br/>
        <label>
          Password:
          <br/>
          <input type="text" ref={(input) => this.input = input}/>
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}