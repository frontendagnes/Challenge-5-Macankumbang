function arrowUp() {
    const arrowUp = document.querySelector(".arrow-up")
    const media = matchMedia("(min-width:800px)");

    function stickyArrow() {
        if (window.scrollY < 800) {
            arrowUp.style.display = "none"
        } else {
            arrowUp.style.display = "block"
        }
    }
    if (media.matches) {
        window.addEventListener('scroll', stickyArrow);
    } else {
        window.removeEventListener('scroll', stickyArrow);
    }

}
export default function () {
    arrowUp()
}