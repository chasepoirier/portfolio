import api from 'modules/api'
import { Dispatch } from 'redux'
import { Actions } from './actions'

export const sendEmailRequest = (data: ContactBody) => async (
  dispatch: Dispatch
) => {
  dispatch(Actions.sendContactRequest())
  try {
    const result = await api.mail.sendEmail(data)
    return dispatch(Actions.sendContactSuccess(result))
  } catch (error) {
    return dispatch(Actions.sendContactFail(error))
  }
}

export const resetEmailState = () => Actions.resetContactState()
