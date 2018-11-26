import React from 'react'

class Contact extends React.Component {
  render(){
    return(
      <div className="container" style={{padding: '40px 0'}}>
      <div className="row">
      <div className="col-md-8 offset-md-2">
      <h1>Contact Us.</h1>
      <form>
      <input type="text" name="message" class="form-control" placeholder="Send Us a Message!"/>
      <button class="btn btn-primary" type="submit">Contact Us</button>
      </form>
      </div>
      </div>
      </div>

    )
  }
}

export default Contact
