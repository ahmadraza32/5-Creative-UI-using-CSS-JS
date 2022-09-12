
const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const upSlide = document.querySelector('.up-btn')
const downSlide = document.querySelector('.down-btn')

const slideLen = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0
leftSlide.style.top = `-${(slideLen - 1) * 100}vh`

upSlide.addEventListener('click', () => changeSlide('up'))
downSlide.addEventListener('click', () => changeSlide('down'))

const changeSlide = direction => {
    const slideHeight = sliderContainer.clientHeight
    
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slideLen - 1){
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLen - 1
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`
}