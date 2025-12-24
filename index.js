const menuIcon = document.getElementById("nav-hid");
const navLinks = document.getElementById("nav-link");
   
menuIcon.addEventListener("click",()=>{
    navLinks.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if(navLinks.classList.contains("active")){
        icon.classList.remove("ri-menu-line");
        icon.classList.add("ri-close-line");
    }else{
        icon.classList.remove("ri-close-line");
        icon.classList.add("ri-menu-line");
    }
  }) ;

  //To change menu to cross

//   menuIcon.addEventListener("click",()=>{
//   navLinks.classList.toggle("active");
//   menuIcon.innerHTML = navLinks.classList.contains("active")
//   ?'<i class="ri-menu-line"></i>'
//   :'<i class="ri-close-line"></i>';
    
//   });

//   document.querySelectorAll(".nav-link a").forEach(link=>{
//     link.addEventListener("click",()=>{
//         navLinks.checkList.remove("active");
//         menuIcon.innerHTML = '<i class="ri-menu-line"></i>';
//     });
//   });