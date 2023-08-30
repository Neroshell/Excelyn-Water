AOS.init({
    duration: 2000
    
  });
  
  const bar = document.querySelector("#bar");
  bar.addEventListener("click", openNav);
  
  function openNav() {
    
      document.getElementById("mySidenav").style.width = "100%";
    
  }
  
  var close = document.getElementById("closeNav");
  close.addEventListener("click", closeNav);
  
  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }

  const navBar = document.querySelector(".nav-bar");
window.addEventListener("scroll", fixnav);

function fixnav(){
  if (window.scrollY > 150){
    navBar.style.position = "fixed";
    navBar.style.top = "0px";
    navBar.style.borderTop = "none";
  }else {
    navBar.style.position = "relative";
    navBar.style.top = "";
    navBar.style.borderTop = "";
   
  }
}
