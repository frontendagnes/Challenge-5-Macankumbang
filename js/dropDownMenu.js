function dropDownMenu() {
    const menuBtn = document.querySelector('.menu__firstItem')
    const menuItems = document.querySelector('.menu__itemGroup')

    menuBtn.addEventListener("click", () => {
        console.log("No i jest")
        menuItems.classList.toggle("menu__activeMenu")
    })
}
export default function () {
    dropDownMenu()
}