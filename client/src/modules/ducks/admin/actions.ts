import { createAction } from 'modules/utils'
import { ActionsUnion } from 'modules/utils/types'
import * as types from './types'

const locationSideEffects = {
  locationFail: (error: string) => createAction(types.LOCATION_FAIL, { error }),
  locationRequest: () => createAction(types.LOCATION_REQUEST),
  locationSuccess: (location: { city: string; code: string }) =>
    createAction(types.LOCATION_SUCCESS, location)
}

const loginSideEffects = {
  loginUserFail: (error: string) =>
    createAction(types.LOGIN_USER_FAIL, { error }),
  loginUserRequest: (credentials: { email: string; password: string }) =>
    createAction(types.LOGIN_USER_REQUEST, credentials),
  loginUserSuccess: (user: any) => createAction(types.LOGIN_USER_SUCCESS, user)
}

const verifySideEffects = {
  verifyUserFail: () => createAction(types.VERIFY_USER_FAIL),
  verifyUserRequest: () => createAction(types.VERIFY_USER_REQUEST),
  verifyUserSuccess: () => createAction(types.VERIFY_USER_SUCCESS)
}

export const Actions = {
  ...locationSideEffects,
  ...loginSideEffects,
  ...verifySideEffects
}

export type Actions = ActionsUnion<typeof Actions>
