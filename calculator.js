function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }
 function myFunction() {
   var txt;
   let name = prompt("pls, enter your name:");
   if (name == null || name == "") {
     txt = "User cancelled the prompt.!";
   } else {
     txt = "Hello " + name + "! How are you??";
   }
   document.getElementById("demo").innerHTML = txt;
 }
 function checkNumbers() {
   if (event.charCode >= 48 && event.charCode <= 57) {
   } else {
     alert("Only numbers!!!");
   }
 }