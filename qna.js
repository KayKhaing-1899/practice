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

const str = document.querySelectorAll("#text")

window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("navibar").style.background = "lightgray"
        str.forEach(function(j) {
            j.style.color = "black"
        })
    }
    else{
        document.getElementById("navibar").style.background = "none"
        str.forEach(function(j) {
            j.style.color = "white"
        })
    }
        
}