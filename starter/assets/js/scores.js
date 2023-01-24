function printScores(){
    let highScores = JSON.parse(localStorage.getItem("highscores")) ||[];
    
    highScores.sort(function(a, b) {
        return b.score - a.score;
    })
    
    highScores.forEach(function(score){
        let li = document.createElement("li");
        li.textContent = `${score.initials} - ${score.score}`
    
        let ol = document.getElementById("highscores");
        ol.appendChild(li);
    })
    }
    
    function clearScores(){
    window.localStorage.removeItem("highScores");
    window.location.reload();
    }
    
    //document.getElementById("clear").onClick = clearScores;
    let clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clearScores);
    
    printScores();