
// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2



// arr = [5 , 5];

// function avgNum(arr) {

//     let total = 0 ;
//     for(let num of arr) {
//         total += num ;
//     }

//     let result = total / arr.length
//     return result ;
// }

// console.log(avgNum(arr));


arr = [5 , 100 ] ;

function avg (arr) {
    let total = 0 ;

    for(let i = 0 ; i < arr.length ; i++){
        total += arr[i]
        
    }
    // console.log(total);
    return total / arr.length
}

console.log(avg(arr));