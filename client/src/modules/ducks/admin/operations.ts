import api from 'modules/api'
import { AdminAPI } from 'modules/api/types'
import { Dispatch } from 'redux'
import { Actions } from './actions'

export const getCurrentLocation = (ip: string) => (dispatch: Dispatch) => {
  dispatch(Actions.locationRequest())
  return api.admin
    .getCurrentLocation(ip)
    .then((location: AdminAPI['location']) =>
      dispatch(Actions.locationSuccess(location))
    )
    .catch(err => dispatch(Actions.locationFail(err)))
}
