window.addEventListener('DOMContentLoaded', () =>{
 
 //#region  portofolio obracenie zdjęć
 const flexItems = document.querySelectorAll('.flexbox-img__descritpion');
 const flexItem = document.querySelectorAll('.flexbox-img__item');
 
for(let i = 0; i <= flexItem.length; i++){
    flexItem[i].addEventListener('mouseenter', () =>{
        flexItems[i].classList.remove('flexbox-img__noActive')
    })

    flexItem[i].addEventListener('mouseleave', () => {
        flexItems[i].classList.add('flexbox-img__noActive')
    })
}
//#endregion


})

