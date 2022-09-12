
const header = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile_img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="product-1.jpeg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
    profile_img.innerHTML = '<img src="product-1.jpeg" alt="">'
    name.innerHTML = 'John Deo'
    date.innerHTML = 'Oct 08, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bgText => bgText.classList.remove('animated-bg-text'))
}