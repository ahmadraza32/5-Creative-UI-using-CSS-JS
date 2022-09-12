
const tagEl = document.querySelector("#tags")
const textarea = document.querySelector('textarea')

textarea.focus()

textarea.addEventListener('keyup', e => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => e.target.value = '' ,10)
        randomSelect()
    }
})

function randomSelect(){
    const times = 30

    const interval = setInterval(()=> {
        const randomTag = pickRandomTag()

        highLightTag(randomTag)

        setTimeout(() => {
            unHighLightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highLightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag(tag){
    tag.classList.add('highlight')
}

function unHighLightTag(tag){
    tag.classList.remove('highlight')
}

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag  => tag.trim())

    tagEl.innerHTML = ''

    tags.forEach(tag => {
        const tagel = document.createElement('span')
        tagel.classList.add('tag')
        tagel.innerText = tag
        tagEl.append(tagel)
    })
}