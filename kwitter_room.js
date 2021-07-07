var firebaseConfig = {
    apiKey: "AIzaSyB-IeWFSkRBRt2UZbxq665UPZbnmn9HAV4",
    authDomain: "let-s-chat-94fdb.firebaseapp.com",
    projectId: "let-s-chat-94fdb",
    storageBucket: "let-s-chat-94fdb.appspot.com",
    messagingSenderId: "199794746991",
    appId: "1:199794746991:web:f1ffeb2ce492d7fc1d0f9a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();