let UpdateScore =JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses: 0,
    tie : 0
 
};

UpdateScoreElement();


function playGame(playerMove){
 

    const ComputerMove = pickComputerMove();
    

    let Result ='';
    if(playerMove === 'Scissors'){
       
    if(ComputerMove === 'Rock')
    {
       Result ='You Lose';
    }
    else if(ComputerMove === 'Paper')
    {
       Result ='You Win';
    }
    else if(ComputerMove === 'Scissors')
    {
       Result ='Tie';
    }
 }



 else if(playerMove === 'Paper')
 {
    if(ComputerMove === 'Rock')
    {
       Result ='You Win';
    }
    else if(ComputerMove === 'Paper')
    {
       Result ='Tie';
    }
    else if(ComputerMove === 'Scissors')
    {
       Result ='You Lose';
    }
 }

 
 else if(playerMove === 'Rock')
 {

    if(ComputerMove === 'Rock')
    {
       Result ='Tie';
    }
    else if(ComputerMove === 'Paper')
    {
       Result ='You Lose';
    }
    else if(ComputerMove === 'Scissors')
    {
       Result ='You Win';
    }
 }


 if(Result === 'You Win')
 {
    UpdateScore.wins +=1;
 }
 else if (Result === 'You Lose')
 {
    UpdateScore.losses +=1
 }
 else if (Result === 'Tie')
 {
    UpdateScore.tie +=1
 }
 localStorage.setItem('score' , JSON.stringify(UpdateScore))

 UpdateScoreElement();
 document.querySelector('.js-result').innerHTML = `The Result : ${Result}`;


 document.querySelector('.js-move').innerHTML = `You : <img src="${playerMove}.png" alt=""> Computer : <img src="${ComputerMove}.png" alt="">
`
 ;

   }
   


 function UpdateScoreElement(){
 document.querySelector('.js-score').innerHTML=
`Wins: ${UpdateScore.wins} Losses: ${UpdateScore.losses} Ties: ${UpdateScore.tie}`;

 }





 function pickComputerMove()
 {
 const Random = Math.random();
 let ComputerMove = '';
 if(Random > 0 && Random <= 1/3)
 {   
     ComputerMove = 'Rock';
 }
 else if(Random > 1/3 && Random <= 2/3)
 {   
     ComputerMove = 'Paper';
 }
 else if (Random >2/3 && Random <= 3/3)
 {   
     ComputerMove = 'Scissors';

 }
 return ComputerMove;

 }