var loader = document.querySelector('.loader');

    window.addEventListener('load', () => {
    loader.classList.add('disappear')
    });


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
     let views = document.querySelectorAll(".viewMore");
     let modal = document.querySelector(".modal");
     let CloseBtn = document.querySelector(".modalBtn");
     let body = document.querySelector("body");
     console.log(views);

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

    let modalImg = document.querySelector(".modal .img");;

    views.forEach(view => {
        view.addEventListener("click", () => {
            // alert("Hello there, I am working very fine..");

                if (view.classList.contains("btn-1")) {
                modalImg.style.background = "url(../Images/pexels-steve-johnson-1183992.jpg)";
                modalImg.style.backgroundSize = "cover";
                } 
                else if(view.classList.contains("btn-2")){
                modalImg.style.background = "url(../Images/pexels-steve-johnson-1585325.jpg)";
                modalImg.style.backgroundSize = "cover";
                }
                else if(view.classList.contains("btn-3")){
                    modalImg.style.background = "url(../Images/pexels-jadson-thomas-542556.jpg)";
                    modalImg.style.backgroundSize = "cover";
                }
                else if(view.classList.contains("btn-4")){
                    modalImg.style.background = "url(../Images/pexels-los-muertos-crew-7998337.jpg)";
                    modalImg.style.backgroundSize = "cover";
                }
                else if(view.classList.contains("btn-5")){
                    modalImg.style.background = "url(../Images/pexels-los-muertos-crew-8030142.jpg)";
                    modalImg.style.backgroundSize = "cover";
                }
                else if(view.classList.contains("btn-6")){
                    modalImg.style.background = "url(../Images/pexels-los-muertos-crew-8030147.jpg)";
                    modalImg.style.backgroundSize = "cover";
                }
                else if(view.classList.contains("btn-7")){
                    modalImg.style.background = "url(../Images/pexels-los-muertos-crew-8030149.jpg)";
                    modalImg.style.backgroundSize = "cover";
                }
                else if(view.classList.contains("btn-8")){
                    modalImg.style.background = "url(../Images/pexels-mali-maeder-802195.jpg)";
                    modalImg.style.backgroundSize = "cover";
                }
                else if(view.classList.contains("btn-9")){
                    modalImg.style.background = "url(../Images/pexels-bruno-scramgnon-315658.jpg)";
                    modalImg.style.backgroundSize = "cover";
                }

        })
    });