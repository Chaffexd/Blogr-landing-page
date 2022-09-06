const dropdownButtons = document.querySelectorAll(".dropdownButton");
const dropdownNav = document.querySelectorAll(".dropdown");
const navBar = document.querySelector("#navBar");

function toggleDropdown(ind) {
    dropdownNav[ind].classList.toggle("show")
}

dropdownButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        toggleDropdown(index)
    })
})