
const firebaseConfig = {
  apiKey: "AIzaSyACj6cl3xeGBLRA8Tg9xgevFN-jPpXdA8o",
  authDomain: "mainproject-c5244.firebaseapp.com",
  databaseURL: "https://mainproject-c5244-default-rtdb.firebaseio.com",
  projectId: "mainproject-c5244",
  storageBucket: "mainproject-c5244.appspot.com",
  messagingSenderId: "596851507396",
  appId: "1:596851507396:web:d4bbecdf714943f89f0991",
//  measurementId: "G-2TYWGQ2G5Z"
};

// Initialize Firebase
firebase .initializeApp(firebaseConfig);


var getName=localStorage.getItem("Username");


document.getElementById("Welcome").innerHTML="WELCOME "+getName;
var input1= document.getElementById("input1")
var button1=document.getElementById("button1");
var div1=document.getElementById("div1");

function addStudentr(){
    var userName =input1.value;
    firebase.database().ref("/").child(userName).update({
        purpose:"adding student name"
    });
    

   localStorage.setItem("student name",userName);
     window.location = "new2.html";
} 
 function getData() {
     firebase.database().ref("/").on('value',function(student)
     {
       document.getElementById("output").innerHTML="";
       student.forEach(function(childstudent)
     { childkey=childstudent,key;
            UserName = childkey;
            console.log("Student Name "+UserName);
     row = "<div class='username' id="+Studentname+" onclick='redirectTostudentName'><div>"
     document.getElementById("output").innerHTML += row;
 });
});                                  
 }
 getData();