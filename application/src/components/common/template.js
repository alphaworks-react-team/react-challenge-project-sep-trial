import './template.css';

import React from 'react';

import { Link } from 'react-router-dom';

import { Nav } from '../../components';

const Template = props => {
  return (
    <div className='bg-layer'>
      <div className='fg-layer'>
        <Link style={{ color: 'inherit' }} to='/'>
          <label style={{ cursor: 'pointer' }} className='logo'>
            Bruce's Diner
          </label>
        </Link>
        <Nav />
        {props.children}
      </div>
    </div>
  )
}

export default Template
