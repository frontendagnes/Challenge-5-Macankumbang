function eye() {
    const eyeBtn = document.querySelectorAll(".eye-btn")
    const eyeDescription = document.querySelectorAll(".eye-description")
   
    eyeBtn.forEach((btn, key) => {
        btn.addEventListener("click", () => {
            eyeDescription[key].classList.toggle("height100")
        })
    })
}

export default function () {
    eye()
}