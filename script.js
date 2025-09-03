//Part 1

console.log("First Message");

setTimeout(() => {
    console.log('Second message (after 2 seconds)');
},2000);

console.log("third message");


//Part 2

// fetch("HTMLOptionsCollection://api.adviceslip.com/advice")
//     .then(response => response.json())
//     .then( data => {
//     console.log("heres your advice:", data.slip.advice);
//     })
//     .catch(error => console.error("error:", error));


//Part 3

// async function getAdvice() {
//     try{
//         let response = await fetch("https://api.adviceslip.com/advice");
//         let data = await response.json();
//         console.log("here's your advice:", data.slip.advice); 
//     }
//     catch(error){
//     console.error("error:", error);
// }
// }

// getAdvice();