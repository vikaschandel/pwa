importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
   
firebase.initializeApp({
    apiKey: "AIzaSyBi2VT910TKxwB0XOQvsj9LysYPOIeL-IQ",
    projectId: "push-notifications-bd643",
    messagingSenderId: "909740393238",
    appId: "1:909740393238:web:1c1ca66af0d7eaaaa34637"
});
  
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});
