
// // // username=window.prompt("Username:");
// // // console.log(username);
// // // document.getElementById("p1").textContent=username;

// // const inc=document.getElementById("increase");
// // const dec=document.getElementById("decrease");
// // const reset=document.getElementById("reset");

// // let count=0;
// // const cnt=document.getElementById("p1");

// // inc.onclick=function(){
// //     count++;
// //     cnt.textContent=count;
// // }

// // dec.onclick=function(){
// //     count--;
// //     cnt.textContent=count;
// // }

// // reset.onclick=function(){
// //     count=Math.random()*100;
// //     cnt.textContent=count.toFixed(1);
// // }

// let score=0;
// const result=document.getElementById("result");
// const submit=document.getElementById("sub");
// let num=document.getElementById("num");

// const response=document.getElementById("response");

// submit.onclick=function(){
//     let Val=num.value;
//     let rand=Math.random()*10;
//     if(Val==rand.toFixed())
//         {
//             score++;
//             result.textContent=`You Won`;
//             response.textContent=`Score:${score}`;

//         }
//         else{
//             result.textContent=`You Lost  Computer:${rand.toFixed()}`;
//             response.textContent=`Score:${score}`;
//         }
// }

let name=document.getElementById("name");
let pass=document.getElementById("pass");
let submit=document.getElementById("submit");
let result=document.getElementById("result");
   
submit.onclick=function(event){
    if(name.value=="ami" && pass.value=="ami123"){
        result.textContent="valid";
    }
    else{
        event.preventDefault()
        result.textContent="Invalid";
    }
}