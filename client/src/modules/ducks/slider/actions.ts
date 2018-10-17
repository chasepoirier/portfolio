import { createAction } from 'modules/utils'
import { ActionsUnion } from 'modules/utils/types'
import * as types from './types'

// export const updateCurrentSlide = (current: number) =>
//   createAction(types.UPDATE_CURRENT_SLIDE, current)

// export const userLoginSuccess = user => ({
//   payload: {
//     user
//   },
//   type: types.USER_LOGIN_SUCCESS
// })

// export const userLoginFail = error => ({
//   payload: {
//     error
//   },
//   type: types.USER_LOGIN_FAIL
// })

export const Actions = {
  updateCurrentSlide: (current: number) =>
    createAction(types.UPDATE_CURRENT_SLIDE, { current })
}

export type Actions = ActionsUnion<typeof Actions>
