
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


// arr = [5 , 100 ] ;

// function avg (arr) {
//     let total = 0 ;

//     for(let i = 0 ; i < arr.length ; i++){
//         total += arr[i]
        
//     }
//     // console.log(total);
//     return total / arr.length
// }

// console.log(avg(arr));

//  challange 3

// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false


//  way 1
// let  alphabet = 'abcdefghijklmnopqrstuvwxyz';

// function isPangram (sentence) {

//     let lowerCased = sentence.toLowerCase();
//     for (let char of alphabet) {

//         if (lowerCased.indexOf(char) === -1) {
//             return false
//         }
       
//     }
//     return true ;


// }
// console.log(isPangram('The five boxing wizards jump quickly'));

// way 2 

// let  alphabet = 'abcdefghijklmnopqrstuvwxyz';

// function isPangram (sentence) {

//     let lowerCased = sentence.toLowerCase();
//     for (let char of alphabet) {

//         if (!lowerCased.includes(char)) {
//             return false
//         }
       
//     }
//     return true ;


// }
// console.log(isPangram('The five boxing wizards jump quickly'));

// function isPangram (sentence) {

//     const alphabet = 'abcdefghijklmnopqrstuvwxyz' ;
    
//     const lowerCased = sentence.toLowerCase();

//     for ( let i = 0 ; i < alphabet.length ; i ++ ) {


//         if (lowerCased.indexOf(alphabet[i]) === -1) {
//             return false
//         }
//         // if (!lowerCased.includes(alphabet[i])) {
//         //     return false
//         // }
//     }
//     return true

// }

// console.log(isPangram('The quick brown fox jumps over a lazy dog'));

// console.log(isPangram('Amazingly few discotheques provide jukeboxes'));
// console.log(isPangram('Amazingly few discotheques  jukeboxes'));

// function isPangram (sentence) {

//     const alphabet = 'abcdefghijklmnopqrstuvwxyz' ;

//     const lowerCased = sentence.toLowerCase();

//     for ( let letter of alphabet ) {

//         if (lowerCased.indexOf(letter) === -1 ) {

//             return false ;
//         }
//     }

//     return true ;
// }

// console.log(isPangram('The quick brown fox jumps over a lazy dog'));

//  challange 4

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object




// function getCard() {

//     const value = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//     const suit = ['clubs','spades', 'hearts','diamonds'] ;

//     const idx = Math.floor(Math.random() * value.length)
//     //  console.log(idx);
//     const randomValue = value[idx];

//     const suitIdx = Math.floor(Math.random() * suit.length)
//     // console.log(suitIdx);
//     const randomSuit = suit[suitIdx];

//     return {
//         value : randomValue ,
//         suit : randomSuit
//     }

// }


// console.log(getCard());

//  way 2

function pick (arr) {

    const idx = Math.floor(Math.random() * arr.length ) ;
    return arr[idx];
}

function getCard() {

    const value = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suit = ['clubs','spades', 'hearts','diamonds'] ; 

    // const randomValue = pick(value) ;
    
    // const randomSuit = pick(suit);

    // return{
    //     value : randomValue ,
    //     suit : randomSuit
    // }

    return { 
        value : pick(value) , 
        suit : pick(suit)
    }

}

console.log(getCard());




















