const burger = document.getElementById("burger"); 
const menuContent = document.querySelector('.menu_content')
const headerCatalog = document.querySelector('.content_header_catalog')
const contentSvg = document.querySelector('.content_svg')
const menuBody1 = document.querySelector('.header_a1');
const menuBody2 = document.querySelector('.header_a2');


let burgers = false;

  const  addSelect = () =>{
    if(burgers){
        burgers = false;
        menuBody1.classList.add("header_delete");
        menuBody2.classList.add("header_delete");
        menuContent.classList.remove("_active");
        headerCatalog.classList.remove("delet_content");  
        contentSvg.classList.remove("delet_content");   
    }else {
        burgers = true;
        menuBody1.classList.remove("header_delete");
        menuBody2.classList.remove("header_delete");
        headerCatalog.classList.add("delet_content");  
        contentSvg.classList.add("delet_content");  
        menuContent.classList.add("_active");
    };
};
burger.addEventListener("click",addSelect);
   