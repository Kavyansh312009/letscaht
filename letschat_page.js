var firebaseConfig = {
      apiKey: "AIzaSyBueIKqchMWpJqvPsewhQeF7pKEXU8McpQ",
      authDomain: "kwitter-c6920.firebaseapp.com",
      databaseURL: "https://kwitter-c6920-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6920",
      storageBucket: "kwitter-c6920.appspot.com",
      messagingSenderId: "1019309130854",
      appId: "1:1019309130854:web:ca25a266bbbee2cfbf59a7"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("Random_name");
    room_name= localStorage.getItem("room_name");

    function send(){
          msg= document.getElementById("msg").value; 
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          })
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


      } });  }); }
getData();

function logout(){
      window.location="index.html";
      localStorage.removeItem("Random_name");
      localStorage.removeItem("room_name");
}
