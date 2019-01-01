let score = 0;

    function computerMove(){
        var ranNum = Math.floor(Math.floor(3)*Math.random());
        if(ranNum == 1){
            return "rock";
           }else if(ranNum == 2){
            return "paper";
            }
            else return "scissors";   
    }

    function playRound(playerSelection,computerSelection){
        if(playerSelection === computerSelection){
            return document.getElementById("output").innerHTML =("Tie! You both played" + playerSelection);
        } else if((playerSelection == "rock") && (computerSelection == "scissors")){
            document.getElementById("output").innerHTML =("The player wins!" + playerSelection + " beats " + computerSelection + "!");
            return score--;
        }
          else if((playerSelection == "scissors") && (computerSelection == "rock")){
            document.getElementById("output").innerHTML =("The computer wins!" + computerSelection + " beats " +playerSelection+ "!");
            return score++;
        }
          else if((playerSelection == "paper") && (computerSelection == "rock")){
            document.getElementById("output").innerHTML = ("The player wins!" + playerSelection + " beats " + computerSelection + "!");  
            return score--;  
        }
          else if((playerSelection == "paper") && (computerSelection == "scissors")){
            document.getElementById("output").innerHTML =("The computer wins!" + computerSelection + " beats " + playerSelection + "!");
            return score++;
        } else 
            return "Error";
    }
    function game(player_click){
        
        var computerSelection = computerMove();
        var playerSelection = player_click;
        if(score < 3 && score > -3 || playerSelection == ""){
 
        playRound(playerSelection,computerSelection);
        document.getElementById("score").innerHTML = "Score: " + (score);
        }
       if(score == 3)  {
        document.getElementById("output").innerHTML = ("The player wins!!! Game over.");
       } else if(score == -3){
        document.getElementById("output").innerHTML = ("The computer wins!! Game over.");
       }
    }
