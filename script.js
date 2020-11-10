let tryNum = 0;
let comWin = 0;
let userWin = 0;
let noWin = 0;
let finalResult;

function computerPlay() {
    var choice = new Array('rock', 'scissors', 'paper');
    return choice[Math.floor(Math.random() * choice.length)];
}


function playRound(playerSelection, computerSelection) {
    tryNum++;
    let result;

    if (playerSelection === computerSelection) {
        result = "draw";
        noWin++;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "rock")) {
        result = "win";
        userWin++;
    }
    else {
        result = "lose";
        comWin++;
    }

    const container = document.querySelector('#container');
    const div = document.createElement("div");
    const text = document.createTextNode("Round" + tryNum + ": " + result + " / " + "computerSelection: " + computerSelection + " / " + "playerSelection: " + playerSelection + " / ");
    div.appendChild(text);
    container.append(div);

    if (tryNum == 5) {
        //console.log(finalResult());
        let allResultInfo = '사용자가 이긴 횟수: ' + userWin + ' / ' +'컴퓨터가 이긴 횟수: ' + comWin + ' / ' + '무승부 횟수: ' + noWin + ' / ';

        if (userWin > comWin)
            finalResult = allResultInfo + "최종 결과: 승리!!!!!";
        else if (userWin === comWin)
            finalResult = allResultInfo + "최종 결과: 무승부!!!!!";
        else
            finalResult = allResultInfo + "최종 결과: 패배!!!!!";
        finalResult = document.createTextNode("\n" + finalResult);
        var br = document.createElement("BR");
        div.appendChild(br);
        div.appendChild(finalResult);
        container.append(div)
    }
}

function game() {
    const container = document.querySelector('#container');
    const h1 = document.createElement("H1");
    const h1Text = document.createTextNode("Rock-Scissors-Paper");
    h1.appendChild(h1Text);
    container.appendChild(h1);

    let scissors = document.createElement("BUTTON");
    scissors.setAttribute("id", "scissors");
    scissors.innerHTML = '<img src="./scissors.png" />';
    container.appendChild(scissors);

    let rock = document.createElement("BUTTON");
    rock.setAttribute("id", "rock");
    rock.innerHTML = '<img src="./rock.png" />';
    container.appendChild(rock);

    let paper = document.createElement("BUTTON");
    paper.setAttribute("id", "paper");
    paper.innerHTML = '<img src="./paper.png" />';
    container.appendChild(paper);


    let btn = document.querySelectorAll('button');
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            //console.log(button.id);
            if(tryNum < 5)
                playRound(button.id, computerPlay());
        })
    })
}

game();