export const LOGIN_USER_REQUEST = '@@admin/LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = '@@admin/LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = '@@admin/LOGIN_USER_FAIL'

export const VERIFY_USER_REQUEST = '@@admin/VERIFY_USER_REQUEST'
export const VERIFY_USER_SUCCESS = '@@admin/VERIFY_USER_SUCCESS'
export const VERIFY_USER_FAIL = '@@admin/VERIFY_USER_FAIL'

export const LOCATION_REQUEST = '@@admin/LOCATION_REQUEST'
export const LOCATION_SUCCESS = '@@admin/LOCATION_SUCCESS'
export const LOCATION_FAIL = '@@admin/LOCATION_FAIL'

export interface AdminState {
  user: {
    loading: boolean
    errors: string | null
    verified: boolean
  }
  location: {
    errors: string | null
    data: {
      city: string
      code: string
    }
    loading: boolean
  }
}
