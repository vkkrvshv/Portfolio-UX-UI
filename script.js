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