function height100() {
    const btn = document.querySelectorAll(".flexbox__btn");
    const description = document.querySelectorAll(".flexbox__description");
    
    btn.forEach( (btn, key) => {
        btn.addEventListener("click", () => {
            description[key].classList.toggle("height100")
            if(description[key].classList.contains("height100")){
                btn.innerText = "Less"
            } else {
                btn.innerText = "More"
            }
        })
    })
}

export default function () {
    height100()
}