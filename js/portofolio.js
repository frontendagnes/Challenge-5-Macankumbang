function leftRightSide() {
    const flexItems = document.querySelectorAll('.flexbox-img__descritpion');
    const flexItem = document.querySelectorAll('.flexbox-img__item');

    flexItem.forEach((item, key) =>{
        item.addEventListener('mouseenter', () =>{
            flexItems[key].classList.remove('flexbox-img__noActive')
        })

        item.addEventListener('mouseleave', () =>{
            flexItems[key].classList.add('flexbox-img__noActive')
        })
    })    

}

export default function () {
    leftRightSide()
};