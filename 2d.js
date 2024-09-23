const ages = [25, 31, 42, 77]; //list of ages in an array

let a = ages.map(  //reads keys in array
    (item)=>{      //arrow function
        if(item < 70)      //if any key is below 70
            return item * 2;   //multiply key by 2
        else
            return item;   //or esle return as original value
    }
);

console.log(a);   //show results