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

             });
         });

         
         
     };

     //To call all the inner function
     startGame();
    };


    //Start the game function
    game();
