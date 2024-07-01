let randomNum = 0
let Submit = document.getElementById("SubMit")
let Answer = document.getElementById("answer")
let interFace = document.getElementById("Interface")
let Reset = document.getElementById("Reset")
let Chances = 3;
let gameOver = false
let ChancesA = document.getElementById("Chances-a")
let history = []
let imgSCR = document.getElementById("main-img")
let H = document.getElementById("history")

Submit.addEventListener("click",play)
Reset.addEventListener("click",reset)
Answer.addEventListener("focus",function(){
    Answer.value =""
})

function makeRandom(){
    randomNum = Math.floor(Math.random()*100)+1
    console.log("정답",randomNum)
}

function play(){

    let userValue = Answer.value

    if(userValue < 1 || userValue > 100){
        interFace.textContent = "1과 100사이의 값을 입력해주세요"
        return;
    }
    if(history.includes(userValue)){
        interFace.textContent = "이미 입력한 숫자입니다 다른값을 입력해주세요"
        return;
    }
    if(userValue < randomNum){
        interFace.textContent = "더 위로"
        console.log("UP")
        imgSCR.src = "https://i.pinimg.com/originals/eb/83/37/eb833767e61ee0685f105e2d18b9c966.gif"
    } else if(userValue > randomNum){
        interFace.textContent = "더 아래로"
        console.log("DOWN")
        imgSCR.src = "https://i.pinimg.com/originals/94/d6/66/94d6668cb38b312395c40c0e77be5566.gif"
    } else {
        interFace.textContent = "정답!!"
        ChancesA.textContent = `정답은 ${randomNum}`
        console.log("정답")
        Submit.disabled = true;
        gameOver = true
        H.textContent = `지금까지 적은 답: ${history}`
        imgSCR.src = "https://i.pinimg.com/originals/11/eb/21/11eb215da6abac58742efd9289d669e7.gif"
        return;
    }

    Chances--;
    ChancesA.textContent = `남은 찬스: ${Chances}번` // 물결표 쓰면 문자열,변수 둘다 출력 가능하다 ${}로 
    console.log("남은기회",Chances)

    history.push(userValue)
    console.log(history)
    H.textContent = `지금까지 적은 답: ${history}`
    if(Chances < 1){
        gameOver = true
    }

    if(gameOver == true){
        Submit.disabled = true;
        interFace.textContent = "GAME OVER"
        ChancesA.textContent = `찬스를 전부 소진하셨습니다~ 정답은 ${randomNum}`
        imgSCR.src = "https://i.pinimg.com/originals/6f/84/f6/6f84f6472da9168ab423b1de21a07795.gif"
    }
}

function reset(){
    history=[]
    Answer.value = " "
    Chances = 3;
    interFace.textContent = "숫자를 맞춰 주세요"
    ChancesA.textContent = `남은 찬스: ${Chances}번`
    Submit.disabled = false;
    gameOver = false
    H.textContent = "리셋!"
    imgSCR.src = "https://i.pinimg.com/originals/03/2e/37/032e379658ddee06e5aeba6675bb5e69.gif"
    makeRandom()
}

makeRandom();