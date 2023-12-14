

const header = document.querySelector("header");
const hamb = document.querySelector(".hamb");

window.addEventListener("scroll", (e) => {

    if (scrollY > 50) {

        header.classList.add("show")

    } else {

        header.classList.remove("show")

    }

}, false);

hamb.addEventListener("click", (e) => {

    const child = e.currentTarget.querySelector("span");


    if (child.classList.contains("visible")) {

        child.classList.remove("visible");

        const modale = document.querySelector(".modale");

        modale.classList.add("hide");

        window.setTimeout(() => {

            document.body.removeChild(modale);

        }, 300);

    } else {

        child.classList.add("visible");

        const modale = document.createElement("div");
        modale.setAttribute("class", "modale")

        document.body.appendChild(modale)


    }

}, false);

