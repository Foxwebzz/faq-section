const moreBtn = document.querySelectorAll('.more-btn')
const answer = document.querySelectorAll('.answer')

for (let i = 0; i < moreBtn.length; i++) {
    moreBtn[i].addEventListener('click', function() {
        answer[i].classList.toggle ('active')
        moreBtn[i].classList.toggle ('active-btn')
    })
}


