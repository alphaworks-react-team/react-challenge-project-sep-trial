import './nav.css';

import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../redux/actions/authActions';

const Nav = props => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const authStatus = auth.isAuthenticated

  const handleClick = () => {
    return dispatch(logoutUser())
  }
  const LogoutLink = (() => {
    return !authStatus ? (
      ''
    ) : (
      <Link to='/' className='nav-link' onClick={handleClick}>
        <div className='nav-link-style'>
          <label className='nav-label'>Log Out</label>
        </div>
      </Link>
    )
  })()
  const UserLink = (() => {
    return !authStatus ? (
      ''
    ) : (
      <Link to={'/view-orders'} className='nav-link' id='middle-link'>
        <div className='nav-link-style'>
          <label className='nav-label'>
            Logged In As: <b />
            {auth.user.email}
          </label>
        </div>
      </Link>
    )
  })()

  return (
    <div className='nav-strip'>
      {UserLink}
      <Link to={'/order'} className='nav-link'>
        <div className='nav-link-style'>
          <label className='nav-label'>Order Form</label>
        </div>
      </Link>
      <Link to={'/view-orders'} className='nav-link' id='middle-link'>
        <div className='nav-link-style'>
          <label className='nav-label'>View Orders</label>
        </div>
      </Link>
      {LogoutLink}
    </div>
  )
}

export default Nav
