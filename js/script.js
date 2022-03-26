const pic1 = document.querySelector('.pic1'); 
const pic2 = document.querySelector('.pic2');
const pic3 = document.querySelector('.pic3'); 
const pic4 = document.querySelector('.pic4'); 
const pic5 = document.querySelector('.pic5');

const  p1 = document.querySelector('.p1');
const  p2 = document.querySelector('.p2');
const  p3 = document.querySelector('.p3');
const  p4 = document.querySelector('.p4');
const  p5 = document.querySelector('.p5');

const links = document.querySelectorAll('.links')

pic1.onclick = () => {
    pic1.classList.toggle('pic--active')
    p1.classList.toggle('info__panel--active')
    links[0].classList.toggle('links--active')
}
 
pic2.onclick = () => {
    pic2.classList.toggle('pic--active')
    p2.classList.toggle('info__panel--active')
    links[1].classList.toggle('links--active')
}
 
pic3.onclick = () => {
    pic3.classList.toggle('pic--active')
    p3.classList.toggle('info__panel--active')
    links[2].classList.toggle('links--active')
}
 
pic4.onclick = () => {
    pic4.classList.toggle('pic--active')
    p4.classList.toggle('info__panel--active')
    links[3].classList.toggle('links--active')
}
 
pic5.onclick = () => {
    pic5.classList.toggle('pic--active')
    p5.classList.toggle('info__panel--active')
    links[4].classList.toggle('links--active')
}
 