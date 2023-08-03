  // // function
  // //Example :-Print the odd numbers in an array
  // var arr = [1, 2, 3, 4, 5, 11, 12];
  // var result = [];
  // //function is used to extract the values(odd array)
  // function odd(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 != 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // }
  // console.log(odd(arr));
  
  // //Anonyomus Function
  // //Example :-Print the odd numbers in an array
  // var arr = [1, 2, 3, 4, 5, 11, 12];
  // var result = [];
  // var odd = function (arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 != 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // };
  // console.log(odd(arr));
  
  // //IIFE (Immediately Invoked Function Expression)
  // //Example :-Print the odd numbers in an array
  // (function odd(arr) {
  //   var result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 != 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   console.log(result);
  // })([1, 2, 3, 4, 5, 11, 12]);
  
  // //Arrow Function (ES6)
  // //Example :-Print the odd numbers in an array
  // const od = (arr) => {
  //   var result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 != 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // };
  // console.log(od([1, 2, 3, 4, 5, 11, 12]));

////Convert all the strings to title caps in a string array
////function
// const words = ["hello new siva"].split(" ");
// function cap(arr){
//   const result = [];
//   for(let i=0;i<arr.length;i++){
//   const word = arr[i];
  
//   const capLetter = word.toUpperCase().charAt() + word.slice(1)
//    result.push(capLetter)
// }
// return result;
// }
//  console.log(cap(words))
  
// //Anonyomus Function
// //Convert all the strings to title caps in a string array
//  const arr = ("this is trial").split(" ");
//   const result = [];
//   const cap = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//        const word = arr[i]
//        const capLetter = word[0].toUpperCase() + word.slice(1) 
//         result.push(capLetter);
      
//     }
//     return result;
//   };
//   console.log(cap(arr));

  ////IIFE (Immediately Invoked Function Expression)
 ////convert all the strings to title caps in a string array
  // (function cap(arr) 
  // {
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     const letter = arr[i];
  //      const array = letter.charAt(0).toUpperCase() + letter.slice(1)
  //      {
  //       result.push(array);
  //     }
  //   }
  //   console.log(result);
  // })(["hi","my", "name" ,"is" ,"siva"]).join(" ");

  ////Arrow Function (ES6)
  ////convert all the strings to title caps in a string array
   
  //  const caps= (arr) => {
  //    const result = [];
    
  //   for (let i = 0; i < arr.length; i++) {
  //     const words = arr[i];
  //      const capletter = words.charAt(0).toUpperCase() + words.slice(1)

  //      {
  //       result.push(capletter);
  //     }
  //   }
  //   return result;
  // };
  // console.log(caps(("how are you").split(" ")));


  //// Sum of all numbers in an array
 // //function
//     let num =[1,2,3,11,50];
//       function array(arr){
//         let result = []
//       let sum = 0;
//       for (let i=0;i<arr.length;i++){
//       sum += (arr[i]);
//       } 
//     result.push(sum);
//     return result;
//  }
//    console.log(array(num))
  
// //Anonyomus Function
// // Sum of all numbers in an array
// const num =[1,5,9,12,15]
// const result =[];
// let sum = 0;
// const arr = function(num){
//   for(let i=0;i<num.length;i++){
//     sum += num[i];
//   }
// result.push(sum);
// return result
// }
// console.log(arr(num))

 ////IIFE (Immediately Invoked Function Expression)
 // // Sum of all numbers in an array

//  (function num(arr){
//   let sum = 0;
//   let result =[];
//   for(let i=0;i< arr.length; i++){
//   sum += arr[i];}
//   {
//   result.push(sum)
//   }
//   console.log(result)
//   })
 
//  ([1,2,3,25,45,102])

/////Arrow Function (ES6)
// // Sum of all numbers in an array


// const num = arr => {
//   let sum = 0;
//   const result =[];
//   for (let i=0;i<arr.length;i++){
  
//     sum += arr[i];}
//     {
//       result.push(sum);
//     }
    
//  return result

// };
// console.log(num([1,2,3,5,9,25]))

//// function
 ////get palindroms in a array
// const array = ["mam","level","hello" ]
//  function word(arr){
//   const result = [];
// for(let i=0;i<arr.length;i++){
//   const revword = arr[i];
//   const palindrom = revword.split("").reverse().join("")
//   if(revword === palindrom){

//     result.push(palindrom);
//   }
// }
//  return result;
// }

//   console.log(word(array))

// // //Anonyomus Function
//  const array = ["mam","level","hello","121","245"]
//  const word = function (arr){
//   const result = [];
// for(let i=0;i<arr.length;i++){
//   const revword = arr[i];
//   const palindrom = revword.split("").reverse().join("")
//   if(revword === palindrom){

//     result.push(palindrom);
//   }
// }
//  return result;
// }
//   console.log(word(array))

  ////IIFE (Immediately Invoked Function Expression)

  
//   (function pal(arr){
//   const result = [];
// for(let i=0;i<arr.length;i++){
//   const revword = arr[i];
//   const palindrom = revword.split("").reverse().join("")
//   if(revword === palindrom){

//     result.push(palindrom);
//   }
// }
// console.log(result)
// })
//   (["man","noon","level","night","lol"])


////arrow function
// const pal = (arr) =>{
//      const result = [];
//   for(let i=0;i<arr.length;i++){
//     const revword = arr[i];
//     const palindrom = revword.split("").reverse().join("")
//     if(revword === palindrom){
//       result.push(palindrom);
     
//     }
//   }
 
//   return result;
//   };
//   console.log(pal(["man","noon","level","night","lol"]))