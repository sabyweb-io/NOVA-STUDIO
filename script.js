/* ==========================================
   NOVAÉ STUDIO
========================================== */


/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        if (loader) {

            loader.style.pointerEvents = "none";

        }

    }, 1500);

});


/* ==========================================
   MENU MOBILE
========================================== */

const menuButton =
    document.querySelector(".menu-button");

const mobileNavigation =
    document.querySelector(".mobile-navigation");


if (menuButton && mobileNavigation) {

    menuButton.addEventListener("click", () => {

        mobileNavigation.classList.toggle("open");

        document.body.classList.toggle("menu-open");

    });


    mobileNavigation
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                mobileNavigation.classList.remove("open");

                document.body.classList.remove("menu-open");

            });

        });

}


/* ==========================================
   ANIMAÇÕES AO ENTRAR NO ECRÃ
========================================== */

const animatedElements =
    document.querySelectorAll(
        ".reveal, .reveal-image, .reveal-project"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach((element) => {

    observer.observe(element);

});


/* ==========================================
   LINKS SUAVES
========================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const id =
                link.getAttribute("href");

            const target =
                document.querySelector(id);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* ==========================================
   FORMULÁRIO → WHATSAPP
========================================== */

const projectForm =
    document.getElementById("projectForm");


if (projectForm) {

    projectForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const formData =
                new FormData(projectForm);


            const nome =
                formData.get("nome")
                    ?.toString()
                    .trim();


            const email =
                formData.get("email")
                    ?.toString()
                    .trim();


            const telefone =
                formData.get("telefone")
                    ?.toString()
                    .trim();


            const tipo =
                formData.get("tipo")
                    ?.toString()
                    .trim();


            const localizacao =
                formData.get("localizacao")
                    ?.toString()
                    .trim();


            const mensagem =
                formData.get("mensagem")
                    ?.toString()
                    .trim();


            if (
                !nome ||
                !email ||
                !tipo ||
                !mensagem
            ) {

                alert(
                    "Por favor, preencha os campos obrigatórios."
                );

                return;

            }


            /*
               Número da NOVAÉ no WhatsApp.
               Formato internacional:
               Moçambique = 258
            */

            const numero =
                "258840765260";


            const texto =

`Olá, NOVAÉ STUDIO.

Gostaria de apresentar um novo projeto.

━━━━━━━━━━━━━━━━

NOME:
${nome}

EMAIL:
${email}

TELEFONE:
${telefone || "Não informado"}

TIPO DE PROJETO:
${tipo}

LOCALIZAÇÃO:
${localizacao || "Não informada"}

SOBRE O PROJETO:
${mensagem}

━━━━━━━━━━━━━━━━

Mensagem enviada através do website da NOVAÉ STUDIO.`;


            const whatsappURL =
                "https://wa.me/" +
                numero +
                "?text=" +
                encodeURIComponent(texto);


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* ==========================================
   TÍTULO DO NAVEGADOR
========================================== */

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            document.title =
                "Volte à NOVAÉ — Studio";

        } else {

            document.title =
                "NOVAÉ STUDIO — Arquitetura & Interiores";

        }

    }
);