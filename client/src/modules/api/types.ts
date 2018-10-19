export interface AdminAPI {
  location: Location
  user: User
}

export interface User {
  uid: string
  email: string
  token: string
}

export interface Location {
  code: string
  city: string
}
