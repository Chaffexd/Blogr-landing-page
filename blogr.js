const dropdownButtons = document.querySelectorAll(".dropdownButton");
const dropdownNav = document.querySelector(".dropdown");

function toggleDropdown() {
    dropdownNav.classList.toggle("show")
}

dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const button = e.target;
        toggleDropdown(button)
    })
})
