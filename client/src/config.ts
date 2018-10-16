import * as firebase from 'firebase'

const apiBase = 'http://localhost:3000'
const config = {
  apiKey: 'AIzaSyC1a8h3dL9z7vTdYPMSZXTuN3P6ldbH0lw',
  authDomain: 'portfolio-51ca7.firebaseapp.com',
  databaseURL: 'https://portfolio-51ca7.firebaseio.com',
  messagingSenderId: '632525704224',
  projectId: 'portfolio-51ca7',
  storageBucket: ''
}
firebase.initializeApp(config)

export { apiBase, firebase }
