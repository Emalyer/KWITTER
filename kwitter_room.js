
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDqkD88_Io7bskYni7kBum4zhRG0rU6bPM",
      authDomain: "kwiiter.firebaseapp.com",
      databaseURL: "https://kwiiter-default-rtdb.firebaseio.com",
      projectId: "kwiiter",
      storageBucket: "kwiiter.appspot.com",
      messagingSenderId: "103488706323",
      appId: "1:103488706323:web:e5e828dcf845690345ece6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    User_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+User_name+"! 👋";

    function AddRoom(){
          room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }
    function getData() {
firebase.database().ref("/").on('value', function(snapshot){
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot){
       childKey = childSnapshot.key;
Room_names = childKey; console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row; });
 });
 } getData();
  function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
 }

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}