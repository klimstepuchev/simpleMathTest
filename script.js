const testBtn = document.getElementById("test")

testBtn.addEventListener("click", () => {
    let result = 0

    const answer1 = document.getElementById("answer1").value
    if(answer1 === "4") {
        result++
    }

    const answer2 = document.getElementById("answer2").value
    if(answer2 === "4") {
        result++
    }

    const answer3 = document.getElementById("answer3").value
    if(answer3 === "1") {
        result++
    }

    const answer4 = document.getElementById("answer4").value
    if(answer4 === "20") {
        result++
    }

    const answer5 = document.getElementById("answer5").value
    if(answer5 === "8") {
        result++
    }

    alert("Кол-во правильных ответов: " + result)
})