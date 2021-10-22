import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { loginUser } from '../../../redux/actions/authActions';

const LoginForm = props => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('3w6t9v')

  const login = event => {
    event.preventDefault()
    props.onLogin()
    return dispatch(loginUser(email, password))
  }

  const emailHandleChange = event => {
    event.preventDefault()
    const input = event.target.value
    setEmail(input)
  }
  const passwordHandleChange = event => {
    event.preventDefault()
    const input = event.target.defaultValue
    setPassword(input)
  }

  const checkboxOnClick = event => {
    const checkbox = event.target
    const password = document.getElementById('inputPassword')

    return !checkbox.checked ? (password.type = 'password') : (password.type = 'text')
  }

  return (
    <form>
      <div className='form-group'>
        <label htmlFor='inputEmail'>Email</label>
        <input
          type='text'
          className='form-control'
          id='inputEmail'
          placeholder='test@test.com'
          autoComplete={'username'}
          onChange={event => emailHandleChange(event)}
        ></input>
      </div>
      <div className='form-group'>
        <label htmlFor='inputPassword'>Password</label>
        <input
          type='password'
          className='form-control'
          name='password'
          id='inputPassword'
          autoComplete={'current-password'}
          defaultValue={password}
          onChange={event => passwordHandleChange(event)}
        />
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0.5rem',
          }}
        >
          <label style={{ fontSize: '0.75rem' }} htmlFor='showPassword'>
            Show Password
          </label>
          <input
            style={{
              display: 'inline',
              fontSize: '0.025rem',
              marginTop: '1rem',
              position: 'absolute',
              bottom: '0%',
              top: '63.9%',
              left: '40%',
              right: '0%',
              width: '2rem',
            }}
            onClick={event => checkboxOnClick(event)}
            type='checkbox'
            className='form-control'
            id='showPassword'
          />
        </span>
      </div>
      <div className='d-flex justify-content-center'>
        <button onClick={event => login(event)} type='submit' className='btn btn-primary'>
          Login
        </button>
      </div>
    </form>
  )
}

export default LoginForm
