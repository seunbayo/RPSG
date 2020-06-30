const game = ()=> {
    let pScore = 0;
    let cScore = 0;
     
    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeout');
            match.classList.add("fadein");
         });
     };
     //play match
     const playMatch = () => {
         const options = document.querySelectorAll('options button');
         const playerHand = document.querySelector('.player-hand');
         const computerHand = document.querySelector('.computer-hand');
         //computer Options
         const computerOptions = ['rock', 'paper', 'scissors'];

         options.forEach(option=>{
             option.addEventListener('click', function() {
                 //Computer choice
                 const computerNumber = Math.floor(Math.random() * 3);
                 const computerChoice = computerOptions[computerNumber];
                 //Compare Hands
                 compareHands(this.textContent, computerChoice);
                 //update images
                playerHand.src = `./assets/img/${this.textContent}.png`;
                computerHand.src = `./assets/img/${computerChoice}.png`;
             });
         });  
     }; 

        const updateScore = () => {
            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('.computer-score p');
            playerScore.textContent =pScore;
            computerScore.textContent = cScore;
        }

        const compareHands = (playerChoice, computerChoice) => {
            //Update text
            const winner = document.querySelector('.winner');
            if(playerChoice === computerChoice){
                winner.textContent = 'it is a tie';
                return;
            }
            //Check for rock
            if(playerChoice === 'rock'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'player wins';
                    cScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'computer wins';
                    cScore++;
                    updateScore();
                    return;
                }
            }
            //Check for paper
            if(playerChoice === 'paper'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'computer wins';
                    cScore++;
                    updateScore();
                    return;  
                }else{
                    winner.textContent = 'player wins';
                    pScore++;
                    updateScore();
                    return;
                }
            }
            //Check for scissors
            if(playerChoice === 'scissors'){
                if(computerChoice === 'rock'){
                    winner.textContent = 'computer wins';
                    cScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'player wins';
                    pScore++;
                    updateScore();
                    return;
                }
            }
        }

     //To call all the inner function
     startGame();
    };


    //Start the game function
    game();
