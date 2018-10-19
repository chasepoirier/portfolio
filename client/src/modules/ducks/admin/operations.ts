import api from 'modules/api'
import { Dispatch } from 'redux'
import { Actions } from './actions'
import { AdminState } from './types'

export const verifyUser = () => (dispatch: Dispatch) => {
  dispatch(Actions.verifyUserRequest())
  return api.admin
    .getCurrentLocation()
    .then((location: AdminState['location']['data']) =>
      dispatch(Actions.locationSuccess(location))
    )
    .catch((error: string) => dispatch(Actions.locationFail(error)))
}
