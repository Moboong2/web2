var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
var shotsLeft = 15;

function onComputerShoot(){
    //
    if(!isComputerTurn) return;
    var textElem = document.getElementById('text');
    var comScoreElem = document.getElementById('computer-score')
    var shootType = Math.random() < 0.5 ? 2:3; //삼항연산자
    
    if(shootType===2){
        if(Math.random() < 0.5){
            textElem.innerHTML = '컴퓨터가 2점슛을 성공시켰습니다.';
            comScore+=2;
            comScoreElem.innerHTML = comScore;
        }else{
            textElem.innerHTML = '컴퓨터가 2점슛을 실패시켰습니다.';
        }
    }else{
        if(Math.random() < 0.33){
            textElem.innerHTML = '컴퓨터가 3점슛을 성공시켰습니다.';
            comScore+=3;
            comScoreElem.innerHTML = comScore;
        }else{
            textElem.innerHTML = '컴퓨터가 3점슛을 실패시켰습니다.';
        }

    }
    isComputerTurn = false;
    //


    var computerButtons = document.getElementsByClassName('btn-computer');    
    for(let i = 0; i < computerButtons.length; i++){
        computerButtons[i].disabled = true;
    }
    var userButtons = document.getElementsByClassName('btn-user');
    for(let i = 0; i < userButtons.length; i++){
        userButtons[i].disabled = false;
    }
    //diableComputerButtons(true);
    //diableUserButtons(false);
}




function onUserShoot(shootType){
    //
    if(isComputerTurn) return;
    var textElem = document.getElementById('text');
    var userScoreElem = document.getElementById('user-score');
    //var $userScoreElem = $('#user-score'); //id
    //$('.user-score'); //class
    //$('user-score'); 

    if(shootType===2){
        if(Math.random() < 0.5){
            textElem.innerHTML = '정대만이 2점슛 성공시켰습니다.';
            //showText('정대만이 2점슛 성공시켰습니다.');
            userScore+=2;
            userScoreElem.innerHTML = userScore;
        }else{
            textElem.innerHTML = '정대만이 2점슛 실패시켰습니다.';
        }
    }else{
        if(Math.random() < 0.33){
            textElem.innerHTML = '정대만이 3점슛을 성공시켰습니다.';
            //showText('정대만이 3점슛 성공시켰습니다.');
            userScore+=3;
            userScoreElem.innerHTML = userScore;
        }else{
            textElem.innerHTML = '정대만이 3점슛을 실패시켰습니다.';
        }
    }
    isComputerTurn = true;
    //


    var computerButtons = document.getElementsByClassName('btn-computer'); 
    for(let i = 0; i < computerButtons.length; i++){
        computerButtons[i].disabled = false;
    }
    var userButtons = document.getElementsByClassName('btn-user');
    for(let i = 0; i < userButtons.length; i++){
        userButtons[i].disabled = true;
    }
    // diableComputerButtons(false);
    // diableUserButtons(true);


    shotsLeft--;
    var shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = shotsLeft;


    if(shotsLeft===0){
        if(userScore>comScore){
            textElem.innerHTML = '승리했습니다.';
        }else if(userScore<comScore){
            textElem.innerHTML = '패배했습니다.'
        }else{
            textElem.innerHTML = '무승부.'
        }

        for(let i = 0; i < userButtons.length; i++){
            userButtons[i].disabled = true;
        }
        for(let i = 0; i < computerButtons.length; i++){
            computerButtons[i].disabled = true;
        }
    }
}



//이렇게 하는 이유 고장나면 얘만 바꾸면 돼. 이래서 함수화가 좋아
function showText(s){
    var textElem = document.getElementsById('text');
    textElem.innerHTML = s;
}

function updateComputerScore(score){
    comScore += score;
    var comScoreElem = document.getElementById('computer-score')
    comScoreElem.innerHTML = comScore;
}

function updateUserScore(score){
    userScore += score;
    var userScoreElem = document.getElementById('user-score')
    userScoreElem.innerHTML = userScore;
}

function diableComputerButtons(flag){
    var computerButtons = document.getElementsByClassName('btn-computer');
    for(let i = 0; i < computerButtons.length; i++){
        computerButtons[i].disabled = flag;
    }
    //$('.btn-computer').prop('disabled',flag); //prop은 모든 요소에 실행(=for)
}

function diableUserButtons(flag){
    var userButtons = document.getElementsByClassName('btn-user');
    for(let i = 0; i < userButtons.length; i++){
        userButtons[i].disabled = flag;
    }
}

