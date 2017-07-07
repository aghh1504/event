import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import * as actions from '../../actions'

class Signin extends Component {

  handleForm({email, password}) {
    console.log(email, password);
    this.props.signinUser({email, password})
  }
  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops!</strong>{this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const {handleSubmit, fields: {email, password}} = this.props
    return (
      <form onSubmit={handleSubmit(this.handleForm.bind(this))}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} className='form-control'/>
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input type='password' {...password} className='form-control'/>
        </fieldset>
        {this.renderAlert()}
        <button action='submit' className='btn btn-primary'>Sign In</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error}
}

export default reduxForm({form: 'signin', fields: ['email', 'password']}, mapStateToProps, actions)(Signin)
