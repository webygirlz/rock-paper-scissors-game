let h2_choice=document.getElementById('choice');console.log(h2_choice);
let img_rock =document.getElementById('rock');console.log(img_rock);
let img_paper=document.getElementById('paper');console.log(img_paper);
let img_scissor =document.getElementById('scissor');console.log(img_scissor);
let p_user_score =document.getElementById('user_score');console.log(p_user_score);
let p_computer_score =document.getElementById('computer_score');console.log(p_computer_score);
let p_result =document.getElementById('result');console.log(p_result);
let h_choices=document.getElementById('choices');console.log(h2_choice)
let userscore=0;
let computerscore=0;

function main(){
img_rock.addEventListener('click',()=>{
    // console.log("rock clicked!")
    playgame('rock')
});
img_paper.addEventListener('click',()=>{
// console.log("Paper clicked!")
    playgame('paper')
});
img_scissor.addEventListener('click',()=>{
    // console.log("scissor clicked!")
    playgame('scissor')
});   

}
main()

 function computerChoice(){
    let choice =["rock","paper","scissor"]
    let computerChoice = Math.floor(Math.random()*3)
    return choice[computerChoice]
  
 }
 console.log(computerChoice());


 function playgame(userchoice){
   console.log('userchoice is ',userchoice)
   console.log('computerChoice is',computerChoice())
   let compuChoice = computerChoice()
   console.log("This is computer function",compuChoice)
   h2_choice.innerHTML = `User choice ${userchoice} and Computer choice ${compuChoice}`


   if(userchoice==compuChoice){
    drow()
   } 
   else if(
    (userchoice=="rock" && compuChoice=="scissor") ||
    (userchoice=="paper" && compuChoice=="rock" ) ||
    (userchoice=="seissor" && compuChoice=="paper")
   ){
    win()
   }
   else{
    lose()
   }
 }

 function win(){
    p_result.innerHTML = "user win &#128513;";
    // userscore++
    p_user_score.innerHTML= ` ${userscore++}  <sub>user</sub>`;
//  alert("win")
}
 function lose(){
    p_computer_score.innerHTML=`${computerscore++}  <sub>computer</sub>`;
    p_result.innerHTML = "Computer win &#128524;";

//    alert("lose")
 }
 function drow(){
    p_result.innerHTML = "This is drow! No one win &#128556;";
    // alert("drow")
// console.log("this is drow no one win")

}



 

