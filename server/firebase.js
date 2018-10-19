import dotenv from 'dotenv'
import firebase from 'firebase'
import admin from 'firebase-admin'

dotenv.config()

const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DB_URL,
  projectId: process.env.G_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: process.env.FB_MESSAGING_ID
}

const serviceAccount = {
  type: 'service_account',
  project_id: process.env.G_PROJECT_ID,
  private_key_id: process.env.G_PRIVATE_KEY_ID,
  private_key: process.env.G_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.G_CLIENT_EMAIL,
  client_id: process.env.G_CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://accounts.google.com/o/oauth2/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: process.env.G_CLIENT_CERT_URL
}

firebase.initializeApp(config)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
const auth = admin.auth()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

export { firebase, db, auth }
