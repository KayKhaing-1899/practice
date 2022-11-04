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

window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("navibar").style.background = "lightgray"
    }
    else{
        document.getElementById("navibar").style.background = "none"
    }
        
}