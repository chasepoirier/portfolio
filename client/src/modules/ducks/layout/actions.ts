import { createAction } from 'modules/utils'
import { ActionsUnion } from 'modules/utils/types'
import * as types from './types'

export const Actions = {
  toggleContactForm: (toggle: boolean) =>
    createAction(types.TOGGLE_CONTACT_FORM, { toggle }),
  toggleMobileNav: (toggle: boolean) =>
    createAction(types.TOGGLE_MOBILE_MENU, { toggle })
}

export type Actions = ActionsUnion<typeof Actions>
