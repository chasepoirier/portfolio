export const SEND_EMAIL_REQUEST = '@@mail/SEND_EMAIL_REQUEST'
export const SEND_EMAIL_SUCCESS = '@@mail/SEND_EMAIL_SUCCESS'
export const SEND_EMAIL_FAIL = '@@mail/SEND_EMAIL_FAIL'

export const RESET_EMAIL_STATE = '@@mail/RESET_EMAIL_STATE'

export interface MailState {
  contact: {
    submitting: boolean
    result: string
    error: string | null
  }
}
