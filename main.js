const result = document.getElementById("result")
const form  = document.getElementById("form")
const one = document.getElementById("one")
const two = document.getElementById("two")
const operation = document.getElementById("operation")


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let calculatorResult

    if (operation.value === "+") {
        calculatorResult = Number(one.value) + Number(two.value)
    }else if (operation.value === "-") {
        calculatorResult = Number(one.value) - Number(two.value)
    } else if (operation.value === "*") {
        calculatorResult = Number(one.value) * Number(two.value)
    } else{
        if (two.value !== "0") {
            calculatorResult = Number(one.value) / Number(two.value)
        } else {
            calculatorResult = "Error"
        }
    }

    result.innerHTML = calculatorResult

    one.value = ""
    two.value = ""
})


// for(let i = 10; i <= 20; i++){
//     console.log(i);
// }

// let i = 10

// while(i<=20){
//     console.log(i++);
// }

// do{
//     if (i%2 == 0) {
//         console.log(i);
//     }
//     i++
// }while(i<=20);


// function loop (a, b){
//     for(let i = a; i <= b; i++){
//         console.log(i);
//     }
// }

// function alg (a,b){
//     let power = 1;
//     for(let x = 1; x<=b; x++){
//         power = power * a
//     }
//     return power
// }

// console.log(alg(2,3));

// function divicible (a,b,c){

//     for(let i = a; i<=b; i++){
//         if(i%c==0){
//             console.log(i);
//         }
//     }

// }
// divicible(10,20,3)

// function christmasTree (a){
//     for(let i = 1; i<=a; i++){
//         for(let j = 1; j<=i; j++){
//             console.log("*");
//         }
//         console.log('\n');
//     }
// }

// christmasTree(5)

// function christmasTree(height) {
//     for (let i = 1; i <= height; i++) {
//         let spaces = "*".repeat(height - i);
//         let stars = " ".repeat(2 * i - 1);
//         console.log(stars + spaces);
//     }
// }

// // Example usage:
// christmasTree(5);


// function christmasTreeByNight(rows){
//     for(let i = 1; i <= rows; i++){

//     }
// }

// function pythagoreanTriple(a, b, c){

//     return a*a + b*b == c*c  || a*a + c*c == b*b || b*b + c*c == a*a

// }

// console.log(pythagoreanTriple(3, 4, 5) == true ? "yes" : "no");
// //yes

// console.log(pythagoreanTriple(5, 4, 3)== true ? "yes" : "no");
// //yes

// console.log(pythagoreanTriple(2, 4, 5)== true ? "yes" : "no");
// //no



//dont get this function///////////////////////////////

// function fibo(n) {
//     if (n <= 1) { // boundary condition which stops recursive function calls
//       return n;  
//      } else {
//       return fibo(n - 2) + fibo(n - 1);
//      }
//   }
//   console.log(fibo(6));

//dont get this function///////////////////////////////

function* testGenCreator() {
    var index = 0;
  
    while(index < 3)
      yield index++;
  }
  
  var gen = testGenCreator();
  console.log(gen.next()); // {done: false, value: 0}
  console.log(gen.next()); // {done: false, value: 1}
  console.log(gen.next()); // {done: false, value: 2}
  console.log(gen.next()); // {done: true, value: undefined}
  
