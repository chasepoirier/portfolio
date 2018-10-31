import { combineReducers } from 'redux'
import * as fromActions from './actions'
import * as types from './types'

// import * as types from './types'

const initialState: types.MailState = {
  contact: {
    error: null,
    result: '',
    submitting: false
  }
}

const contact = (
  state: types.MailState['contact'] = initialState.contact,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.SEND_EMAIL_REQUEST:
      return { ...state, submitting: true }
    case types.SEND_EMAIL_SUCCESS:
      return { ...state, result: action.payload.result, submitting: false }
    case types.SEND_EMAIL_FAIL:
      return { ...state, error: action.payload.error, submitting: false }
    case types.RESET_EMAIL_STATE:
      return { ...state, error: null, result: '' }
    default: {
      return state
    }
  }
}

export default combineReducers({ contact })
