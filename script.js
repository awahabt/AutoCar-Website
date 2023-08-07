const toggleMenu=()=>{
    const mobileMenu=document.getElementById("mobile_nav-btn");
    if(mobileMenu.style.display=='none'){
      mobileMenu.style.display='block'
    }
    else{
      mobileMenu.style.display='none'
    }
  }
  toggleMenu()