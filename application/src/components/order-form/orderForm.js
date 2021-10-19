import './orderForm.css';

import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Template } from '../../components';
import { SERVER_IP } from '../../private';

const ADD_ORDER_URL = `${SERVER_IP}/api/add-order`

const mapStateToProps = state => ({
  auth: state.auth,
})

class OrderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order_item: '',
      quantity: '1',
    }
  }

  menuItemChosen(event) {
    event.preventDefault()
    this.setState(...this.state, { item: event.target.value })
  }

  menuQuantityChosen(event) {
    event.preventDefault()
    this.setState(...this.state, { quantity: event.target.value })
  }

  submitOrder(event) {
    event.preventDefault()
    if (this.state.order_item === '') return
    fetch(ADD_ORDER_URL, {
      method: 'POST',
      body: JSON.stringify({
        order_item: this.state.order_item,
        quantity: this.state.quantity,
        ordered_by: this.props.auth.email || 'Unknown!',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(response => console.log('Success', JSON.stringify(response)))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <Template>
        <div className='form-wrapper'>
          <form>
            <label className='form-label'>I'd like to order...</label>
            <br />
            <select
              value={this.state.order_item}
              onChange={event => this.menuItemChosen(event)}
              className='menu-select'
            >
              <option value='' defaultValue disabled hidden>
                Lunch menu
              </option>
              <option value='Soup of the Day'>Soup of the Day</option>
              <option value='Linguini With White Wine Sauce'>
                Linguini With White Wine Sauce
              </option>
              <option value='Eggplant and Mushroom Panini'>
                Eggplant and Mushroom Panini
              </option>
              <option value='Chili Con Carne'>Chili Con Carne</option>
            </select>
            <br />
            <label className='qty-label'>Qty:</label>
            <select
              value={this.state.quantity}
              onChange={event => this.menuQuantityChosen(event)}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
            </select>
            <button
              type='submit'
              className='order-btn'
              onClick={event => this.submitOrder(event)}
            >
              Order It!
            </button>
          </form>
        </div>
      </Template>
    )
  }
}

export default connect(mapStateToProps, null)(OrderForm)
