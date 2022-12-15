const hamburger = document.getElementById('hamburgerid')
const navbarfixed = document.querySelector(".navbar_fixed")
const hamburgerX = document.getElementById("hamburgerX")
hamburger.onclick = () => {
    navbarfixed.style.display = "block"
    hamburger.style.display = "none"
    hamburgerX.style.display = "block"
}
hamburgerX.onclick = () => {
    hamburgerX.style.display = "none"
    hamburger.style.display = "block"
    navbarfixed.style.display = "none"
}