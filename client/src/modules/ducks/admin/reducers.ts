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

const location = (
  state: types.AdminState['location'] = initialState.location,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.LOCATION_REQUEST:
      return { ...state, loading: true }
    case types.LOCATION_SUCCESS:
      return { ...state, data: action.payload, loading: false }
    case types.LOCATION_FAIL:
      return { ...state, errors: action.payload.error, loading: false }
    default: {
      return state
    }
  }
}

export default combineReducers({ location })
