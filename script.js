function initLanguageSwitcher() {

    const langButtons = document.querySelectorAll(".lang-btn");

    if (!langButtons.length) return;

    function setLanguage(lang) {

        document.documentElement.lang = lang;

        document.querySelectorAll("[data-ru]").forEach(element => {

            const text = element.dataset[lang];

            if (text !== undefined) {
                element.textContent = text;
            }

        });

        langButtons.forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.lang === lang
            );

        });

        localStorage.setItem("language", lang);

    }

    langButtons.forEach(button => {

        button.addEventListener("click", () => {

            setLanguage(button.dataset.lang);

        });

    });

    const savedLanguage =
        localStorage.getItem("language") || "ru";

    setLanguage(savedLanguage);

}

function initPortrait() {

    const portrait = document.querySelector(".portrait-wrapper");
    const portraitImage = portrait?.querySelector("img");
    const glowLayer = portrait?.querySelector(".portrait-glow");

    if (!portrait || !portraitImage) return;

    portrait.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-5px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 5000,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

    setInterval(() => {
        portraitImage.animate(
            [
                { transform: "translateY(0px)" },
                { transform: "translateY(-2px)" },
                { transform: "translateY(1px)" },
                { transform: "translateY(0px)" }
            ],
            {
                duration: 180,
                easing: "ease-out"
            }
        );
    }, 7000);

    portrait.addEventListener("mouseenter", () => {
        portraitImage.style.transform = "scale(1.04)";
    });

    portrait.addEventListener("mouseleave", () => {
        portraitImage.style.transform = "scale(1)";
    });

    if (glowLayer) {
        setInterval(() => {
            glowLayer.classList.add("active");

            setTimeout(() => {
                glowLayer.classList.remove("active");
            }, 1800);

        }, 9000);
    }
}

initPortrait();


document.addEventListener("DOMContentLoaded", () => {

    initLanguageSwitcher();

});

/* ===========================================================
   MOBILE MENU
=========================================================== */


function initMobileMenu(){


    const burger = document.querySelector(".burger");

    const menu = document.querySelector(".nav-links");

    const links = document.querySelectorAll(".nav-links a");


    if(!burger || !menu){

        return;

    }



    burger.addEventListener("click", ()=>{


        burger.classList.toggle("active");

        menu.classList.toggle("active");


    });



    // закрытие после перехода по ссылке

    links.forEach(link=>{


        link.addEventListener("click", ()=>{


            burger.classList.remove("active");

            menu.classList.remove("active");


        });


    });



    // закрытие при клике вне меню

    document.addEventListener("click",(event)=>{


        const clickedOutside = 
        !menu.contains(event.target) &&
        !burger.contains(event.target);



        if(clickedOutside){


            burger.classList.remove("active");

            menu.classList.remove("active");


        }


    });


}



initMobileMenu();