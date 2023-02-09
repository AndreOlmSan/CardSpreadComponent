let activeIndex = 0

const groups = document.getElementsByClassName('card-container')

const handleLikeClick = () => {

    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`)



    currentGroup.dataset.status = 'after'


    nextGroup.dataset.status = 'becoming-active-before'

    setTimeout(() => {

        nextGroup.dataset.status = 'active'
        activeIndex = nextIndex
    })
    
}

const handleDislikeClick = () => {
    
    const nextIndex = activeIndex - 1 >= groups.length - 0 ? activeIndex - 1 : groups.length - 1

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`)



    currentGroup.dataset.status = 'before'


    nextGroup.dataset.status = 'becoming-active-after'

    setTimeout(() => {

        nextGroup.dataset.status = 'active'
        activeIndex = nextIndex
    })
}