function menuFixed() {
    const menu = document.querySelector(".menu")
    const media = matchMedia("(min-width:800px)")

    function sticky() {
        if (window.scrollY > 1) {
            menu.classList.add("menu__sticky")
        } else {
            menu.classList.remove("menu__sticky")
        }
    }
    if (media.matches) {
        window.addEventListener('scroll', sticky)
    } else {
        window.removeEventListener('scroll', sticky)
    }

}
export default function () {
    menuFixed()
}