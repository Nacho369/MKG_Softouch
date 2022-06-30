

window.onload = function(){
    let navbar = document.querySelector(".navSection");


    /* Nav Bar  Scroll Script*/
    window.addEventListener("scroll", () => {
        if(this.scrollY > 100){
            navbar.classList.add("nav-sticky");
        }
        else{
            navbar.classList.remove("nav-sticky");
        }
    })

    /* Nav Bar Slide From Top Script */
    var toggler = document.querySelector(".bars");
    var menu = document.querySelector(".navList");

     toggler.addEventListener("click", () => {
         menu.classList.toggle("show");
     })

     /* Nav Close Effect Script */
    let navLists = document.querySelectorAll(".navList li");

     //console.log(navLists);
    navLists.forEach(navList => {
        navList.addEventListener("click", () =>{
            menu.classList.toggle("show");
        })
    });

     /* Image Modal Script */
     let views = document.querySelectorAll(".btn-9");
     let modal = document.querySelector(".modal");
     let CloseBtn = document.querySelector(".modalBtn");
     let body = document.getElementsByTagName("body");
     console.log(modal);

     views.forEach(view => {
         view.addEventListener("click", () => {
            //alert("Hello there, I am working very fine..");
            modal.classList.add("imgShow"); 
            body.style.overflow = "hidden";
         });
     });
     CloseBtn.addEventListener("click", () => {
            modal.classList.remove("imgShow");
            body.style.overflow = "scroll";
     });


     /* Change Modal Background Script */

    // let modalBg = document.querySelector(".img");

    // view.forEach(views => {
    //     views.addEventListener("click", () => {
    //         // alert("Hello there, I am working very fine..");
    //         if (views.classList.contains("btn-1")) {
    //             modalBg.style.background = "url(../Images/pexels-steve-johnson-1183992.jpg)";
    //             modalBg.style.backgroundSize = "cover";
    //         } 
    //         else if(views.classList.contains("btn-2")){
    //             modalBg.style.background = "url(../Images/pexels-steve-johnson-1585325.jpg)";
    //             modalBg.style.backgroundSize = "cover";
    //         }
    //         else if(views.classList.contains("btn-3")){
    //             modalBg.style.background = "url(../Images/pexels-jadson-thomas-542556.jpg)";
    //             modalBg.style.backgroundSize = "cover";
    //         }
    //         else if(views.classList.contains("btn-4")){
    //             modalBg.style.background = "url(../Images/pexels-los-muertos-crew-7998337.jpg)";
    //             modalBg.style.backgroundSize = "cover";
    //         }
    //         else if(views.classList.contains("btn-5")){
    //             modalBg.style.background = "url(../Images/pexels-los-muertos-crew-8030142.jpg)";
    //             modalBg.style.backgroundSize = "cover";
    //         }
    //         else if(views.classList.contains("btn-6")){
    //             modalBg.style.background = "url(../Images/pexels-los-muertos-crew-8030147.jpg)";
    //             modalBg.style.backgroundSize = "cover";
    //         }
    //         else if(views.classList.contains("btn-7")){
    //             modalBg.style.background = "url(../Images/pexels-los-muertos-crew-8030149.jpg)";
    //             modalBg.style.backgroundSize = "cover";
    //         }
    //         else if(views.classList.contains("btn-8")){
    //             modalBg.style.background = "url(../Images/pexels-mali-maeder-802195.jpg)";
    //             modalBg.style.backgroundSize = "cover";
    //         }
    //         else if(views.classList.contains("btn-9")){
    //             modalBg.style.background = "url(../Images/pexels-bruno-scramgnon-315658.jpg)";
    //             modalBg.style.backgroundSize = "cover";
    //         }
            
    //     })
    // });

        
        



}; //Onload End

    
