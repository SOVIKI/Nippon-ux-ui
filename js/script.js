function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function openForm1(antal) {
    sessionStorage.setItem("antal", antal);
    document.getElementById("myForm1").style.display = "flex";
}

function openForm2(spisevaner) {
    sessionStorage.setItem("spisevaner", spisevaner);
    document.getElementById("myForm2").style.display = "flex";
}

function openForm3(tid) {
    sessionStorage.setItem("tid", tid);
    document.getElementById("myForm3").style.display = "flex";
}

function openForm4(allergi) {
    sessionStorage.setItem("allergi", allergi);
    document.getElementById("myForm4").style.display = "flex";
}

function openForm5(opskrift) {
    sessionStorage.setItem("opskrift", opskrift);
    document.getElementById("myForm5").style.display = "flex";
}



function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm1").style.display = "none";
    document.getElementById("myForm2").style.display = "none";
    document.getElementById("myForm3").style.display = "none";
    document.getElementById("myForm4").style.display = "none";
    document.getElementById("myForm5").style.display = "none";
}



var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
