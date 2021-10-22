import {
  LOGIN,
  LOGOUT,
} from '../actions/types';

const INITIAL_STATE = {
  isAuthenticated: false,
  token: null,
  user: {
    id: null,
    screenName: null,
    email: null,
  },
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: {
          id: (() => {
            const firstRandomNumber = Math.floor(
              Math.random() * (action.payload.email.length - 1)
            )
            const secondRandomNumber = Math.floor(Math.random() * 999)
            const letters = action.payload.email.slice(0, 2)
            const alphaNumericID = `${firstRandomNumber}${letters}${secondRandomNumber}`
            return alphaNumericID
          })(),
          screenName: (() => {
            return action.payload.email !== null || undefined
              ? action.payload.email.split('@', 1).toString()
              : null
          })(),
          email: action.payload.email,
        },
      }

    case LOGOUT:
      return {
        ...INITIAL_STATE,
      }
    default:
      return state
  }
}

export default authReducer
