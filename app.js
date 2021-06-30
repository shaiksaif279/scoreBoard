const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winingScoreSelect =document.querySelector("#playTo");
const dButton =document.querySelector('#delete');
const msgDelete =document.querySelector('.message-body');
const d =document.querySelector('#demo');

let p1Score = 0;
let p2Score = 0;
let winingScore = 3;
let isgameOver = false;

p1Button.addEventListener('click', function () {
    if(!isgameOver){
        p1Score+=1;
        if(winingScore===p1Score){
            isgameOver=true;
            p1Display.classList.add('winner');
            p2Display.classList.add('looser');
        }
    }p1Display.textContent=p1Score;
   
})
p2Button.addEventListener('click', function () {
    if(!isgameOver){
        p2Score+=1;
        if(winingScore===p2Score){
            isgameOver=true;
            p2Display.classList.add('winner');
            p1Display.classList.add('looser');
        }
    }p2Display.textContent=p2Score;
   
})


resetButton.addEventListener('click',reset);


function reset(){
    isgameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.classList.remove('winner','looser');
    p2Display.classList.remove('winner','looser');
    
    
    p1Display.textContent=0;
    p2Display.textContent=0;
}
winingScoreSelect.addEventListener('change',function () {
    winingScore = parseInt(this.value);
    
    reset();
})
dButton.addEventlistener('click',function(){
    msgDelete.remove();
    d.textContent="pls refresh to get content back";

})






