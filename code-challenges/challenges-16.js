'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
    //reverse() I can easily solve it with split join and resove but I want to show you my logic
    let str=''
    for(let i=string.length-1;i>=0;i--){
        str+=string[i]
    }
    return str
    
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let regex=/([\^][_][\^])/
    let arr1=[]
    for (let string of arr){
        if(regex.test(string)){
            arr1.push(string)
            console.log(string)

        }

    }
    return arr1
}

// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    let str1=''
    for(let i=0;i<str.length;i++){
        if((i%2===0)&&(str[i]!==' ')){
            str1+=str[i]
        }
    }
    return str1
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    //write your code here ...
    let regex=/[c][h][i][c][k][e][n]/ig
    let arr2=[]
    arr.forEach(arr=>{
        let arr1=[]
    for (let string of arr){
        if(regex.test(string)){
            arr1.push(string)
            arr2.push(arr1)
        }}

    })
    return arr2

}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
