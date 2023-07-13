

let tabItem = document.querySelectorAll('.tabs__button')
tabContent = document.querySelectorAll('.tabs__content-item')

tabItem.forEach(function(element){
  element.addEventListener('click',open);
})

function open(evt){
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;
  tabItem.forEach(function(item){
    item.classList.remove('tabs__button--active')
  })
  tabTarget.classList.add('tabs__button--active')

  tabContent.forEach(function(item)
  {
    item.classList.remove('tabs__content-item--active')
  })
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}

const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click',()=>{
  menu.classList.toggle('menu__list--active')
})



var swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});