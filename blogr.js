const dropdownButtons = document.querySelectorAll(".dropdownButton");
const dropdownNav = document.querySelectorAll(".dropdown");
const navBar = document.querySelector("#navBar");
const mobileNav = document.getElementById("mobileNav");
const mobileDropDown = document.getElementById("mobileDropDown");
const mobileDropDownButtons = document.querySelectorAll(".mobDropdownButton");
const mobileDropDownNav = document.querySelectorAll(".mobdropdown")

function toggleDropdown(ind) {
    // Hides drop down when selecting another menu
    dropdownNav.forEach(drop => drop.classList.remove("show"))
    // Toggles drop down
    dropdownNav[ind].classList.toggle("show")
}

function mobileToggleDropdown(idx) {
    mobileDropDownNav[idx].classList.toggle("show")
}

dropdownButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        toggleDropdown(index)
    })
})

mobileNav.addEventListener("click", () => {
    mobileDropDown.classList.toggle("show")
})

mobileDropDownButtons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        mobileToggleDropdown(idx)
    })
})