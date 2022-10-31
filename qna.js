const questions = document.querySelectorAll('#ques-ans')

questions.forEach(function(q) {
    questions[0].classList.toggle("show-text")
    const btn = q.querySelector('.qbtn')
    btn.addEventListener("click",function() {
        questions.forEach(function(i) {
            if (q !== i) {
                i.classList.remove("show-text")
            }
        })
        q.classList.toggle("show-text")
    })
})