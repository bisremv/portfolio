function toggleaside(){
  document.body.dataset.aside = document.body.dataset.aside === "true" ? "false" : "true";

}
 document.getElementById("menu-img").addEventListener("click",function  (){
  
  document.getElementsByClassName("nav-tabs")[0].classList.toggle("drop-down");
 });
 
 document.getElementById("mode").addEventListener("click",function  (){
  
  document.getElementsByClassName("dark")[0].classList.toggle("changed");
  
  document.getElementsByClassName("light")[0].classList.toggle("changel");
 });
