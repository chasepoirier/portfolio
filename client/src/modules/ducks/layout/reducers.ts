import { combineReducers } from 'redux'
import * as fromActions from './actions'
import * as types from './types'

const initialState: types.LayoutState = {
  contact: {
    active: false
  },
  mobile: {
    menu: {
      active: false
    }
  }
}

const contact = (
  state: types.LayoutState['contact'] = initialState.contact,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.TOGGLE_CONTACT_FORM:
      return { ...state, active: action.payload.toggle }
    default: {
      return state
    }
  }
}

const mobile = (
  state: types.LayoutState['mobile'] = initialState.mobile,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.TOGGLE_MOBILE_MENU:
      return {
        ...state,
        menu: { ...state.menu, active: action.payload.toggle }
      }
    default: {
      return state
    }
  }
}

export default combineReducers({ contact, mobile })
