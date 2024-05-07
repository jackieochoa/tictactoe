var turn = 1
var win = false
var xWins = 0
var yWins = 0

function changeButton(buttonID){
    currentButton = document.getElementById(buttonID)

    if ((currentButton.textContent != "X") && (currentButton.textContent != "O")){
        if (turn%2 == 1){
            currentButton.textContent = "X"
        } else {
            currentButton.textContent = "O"
        }

        checkWinner()
        turn ++
    }
}

function checkWinner(){
    let AA = document.getElementById("AA").textContent
    let BA = document.getElementById("BA").textContent
    let CA = document.getElementById("CA").textContent
    let AB = document.getElementById("AB").textContent
    let BB = document.getElementById("BB").textContent
    let CB = document.getElementById("CB").textContent
    let AC = document.getElementById("AC").textContent
    let BC = document.getElementById("BC").textContent
    let CC = document.getElementById("CC").textContent

    let ROW1 = (AA==BA && BA==CA && (CA!=""))
    let ROW2 = (AB==BB && BB==CB && (CB!=""))
    let ROW3 = (AC==BC && BC==CC && (CC!=""))

    let C1 = (AA==AB && AB==AC && (AC!=""))
    let C2 = (BA==BB && BB==BC && (BC!=""))
    let C3 = (CA==CB && CB==CC && (CC!=""))

    let D1 = (AA==BB && BB==CC && (CC!=""))
    let D2 = (CA==BB && BB==AC && (AC!=""))

    if ((ROW1 || ROW2 || ROW3 || C1 || C2 || C3 || D1 || D2) && (win == false)){
        win = true

        if (turn % 2 == 1){
            alert("X has won.")
            xWins ++
            tableCell = document.getElementById("xWins")
            tableCell.textContent = xWins
        } else {
            alert("O has won.")
            yWins ++
            tableCell = document.getElementById("yWins")
            tableCell.textContent = yWins
        }

    }
}

function resetBoard(){
    document.getElementById("AA").textContent = ""
    document.getElementById("AB").textContent = ""
    document.getElementById("AC").textContent = ""
    document.getElementById("BA").textContent = ""
    document.getElementById("BB").textContent = ""
    document.getElementById("BC").textContent = ""
    document.getElementById("CA").textContent = ""
    document.getElementById("CB").textContent = ""
    document.getElementById("CC").textContent = ""

    win = false
    turn = 1
}