
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.

importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDNI-Hd69uyny0YNjta3aFGbdCvkAkfnVQ",
  authDomain: "fir-fcm-6b97f.firebaseapp.com",
  projectId: "fir-fcm-6b97f",
  storageBucket: "fir-fcm-6b97f.appspot.com",
  messagingSenderId: "795106034901",
  appId: "1:795106034901:web:a947f60d16fcea816e8e5c",
  measurementId: "G-KYDXZ9RLWF"
});

const messaging = firebase.messaging();

// [START messaging_on_background_message]
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END messaging_on_background_message]
self.addEventListener('notificationclick', event => {
  console.log(event,"asdasdas")
  return event;
});


