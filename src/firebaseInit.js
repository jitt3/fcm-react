import firebase from 'firebase/app'
import 'firebase/messaging'
import {config, vapidKey} from './config'
import {registerServiceWorker} from "./serviceWorker";

const initializeFirebaseApp = firebase.initializeApp(config)

const messaging = initializeFirebaseApp.messaging()
const serviceWorkerRegistration = registerServiceWorker()
messaging.getToken(
  {vapidKey, serviceWorkerRegistration}
)

const requestPermission = () =>
  new Promise((resolve, reject) => {
    Notification
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken)
      })
      .catch((err) => {
        reject(err)
      })
  })



export {messaging, requestPermission}
