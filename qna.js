const questions = document.querySelectorAll('#ques-ans')

questions.forEach(function(q) {
    const btn = q.querySelector('.qbtn')
    questions[0].classList.toggle("show-text")
    btn.addEventListener("click",function() {
        questions.forEach(function(i) {
            if (q !== i) {
                i.classList.remove("show-text")
            }
        })
        q.classList.toggle("show-text")
    })
})