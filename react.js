var button=document.getElementById("btn1");
var label1=document.getElementById("label1");
var label2=document.getElementById("label2");
var input1=document.getElementById("input1");
var input2=document.getElementById("input2"); 


function addlocal(){ 
    button.textContent="Submitted"; 
    window.location="new.html"; 
    let value1=input1.value;
    localStorage.setItem("Username",value1);
    let value2=input2.value;
    localStorage.setItem("password",value2)
    
}; 
var getUserName=localStorage.getItem("Username");
var getPassword=localStorage.getItem("password");

if(getUserName===null || getPassword===null ){
    input1.value=""; 
    input2.value="";
} 
else{
    input1.value=getUserName;
    input2.value=getPassword;
}