const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const links = document.querySelectorAll(".sidebar li");

console.log(hamburger);
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    hamburger.classList.toggle("cross");
    hamburger.classList.toggle("fade")
    links.forEach(link =>{
        link.classList.toggle("fade");

    });

});