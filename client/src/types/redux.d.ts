import { AdminState } from 'ducks/admin/types'
import { MailState } from 'ducks/mail/types'
import { SliderState } from 'ducks/slider/types'
import { LayoutState } from 'ducks/layout/types'

declare interface ReduxState {
  admin: AdminState
  slider: SliderState
  mail: MailState
  layout: LayoutState
}
