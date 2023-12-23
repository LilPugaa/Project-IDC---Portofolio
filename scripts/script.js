//
const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation_toggler");
const buttonCloser = document.querySelector(".navigation_closer");

const elementnavigationMenu = document.querySelector(".navigation_menu")
//

// VALUE MENU //
const navigationMenu = [
    {
        title: "Home",
        link: "/#",
    },

    {
        title: "About Me",
        link: "/#",
    },

    {
        title: "Portofolio",
        link: "/#",
    },

    {
        title: "Skills",
        link: "/#",
    },

    {
        title: "Contact",
        link: "/#",
    }
];

navigationMenu.map((navigation) => {
    return navigation;
})
// VALUE MENU //

// UNTUK MENAMPILKAN SIDEBAR KETIKA DI KLIK //
buttonToggler.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    sidebar.classList.remove("hide");
});
// UNTUK MENAMPILKAN SIDEBAR KETIKA DI KLIK //

// UNTUK MENUTUP SIDEBAR KETIKA DI KLIK //
buttonCloser.addEventListener("click", () => {
    sidebar.classList.remove("show");
    sidebar.classList.toggle("hide");
});
// UNTUK MENUTUP SIDEBAR KETIKA DI KLIK //