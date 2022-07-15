const Titles=document.querySelector(".Titles");
const UX=document.querySelector(".UX_design");
const web=document.querySelector(".main_image");
const holaux=document.querySelector(".hola_ux");
const web_id=document.querySelector(".web_id");
const Portafolio=document.querySelector(".Portafolio ")
const Web_development=document.querySelector(".Web_development");

const Prueba=document.querySelector(".Prueba");
holaux.addEventListener("click", function () {

    html= `<div class="UX_design">   <div class="main_image"> 

    <img src="./logos/Rectangle 58.png" alt="main_imagen" class="img_tools">
    </div>

    <div class="Project_mobile"> 

    <img src="./Logos/Rectangle 59.png" alt="imagen2" class="img_59">
    <img src="./logos/Rectangle 60.png" alt="imagen3" class="img_60">
   </div></div>`


  Prueba.innerHTML=html;

  

})

web_id.addEventListener("click", function () {

    html2=`<div class="Web_development"> <div class="webdesign">
               <img src="./Logos/webdesign.png" alt="webDesign" class="web_image">

               </div></div>`


    Prueba.innerHTML=html2; 
    



  
})

