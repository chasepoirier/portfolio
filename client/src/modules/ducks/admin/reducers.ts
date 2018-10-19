import { combineReducers } from 'redux'
import * as fromActions from './actions'
import * as types from './types'

// import * as types from './types'

const initialState: types.AdminState = {
  location: {
    data: {
      city: '',
      code: ''
    },
    errors: null,
    loading: true
  },
  user: {
    errors: null,
    loading: true,
    verified: false
  }
}

const user = (
  state: types.AdminState['user'] = initialState.user,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.VERIFY_USER_REQUEST: {
      return { ...state, loadin: true }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({ user })
