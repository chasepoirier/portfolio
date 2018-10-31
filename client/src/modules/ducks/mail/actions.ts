import { createAction } from 'modules/utils'
import { ActionsUnion } from 'modules/utils/types'
import * as types from './types'

const contact = {
  resetContactState: () => createAction(types.RESET_EMAIL_STATE),
  sendContactFail: (error: string) =>
    createAction(types.SEND_EMAIL_FAIL, { error }),
  sendContactRequest: () => createAction(types.SEND_EMAIL_REQUEST),
  sendContactSuccess: (result: string) =>
    createAction(types.SEND_EMAIL_SUCCESS, { result })
}

export const Actions = {
  ...contact
}

export type Actions = ActionsUnion<typeof Actions>
