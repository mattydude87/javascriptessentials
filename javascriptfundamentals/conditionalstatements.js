let n = 10;
if(n>0){
    console.log('n is positive');
}else if (n<0){
    console.log('n is negative');
}else{
    console.log('n is zero');
}

let age = 21;
let status = age >= 18 ? 'Eligible' : 'Not Eligible';
console.log('Status is' + status);

let choice = 'a';
switch(choice){
    case 'a' : console.log('Trip to paris');
        break;
    case 'b' : console.log('Trip to New York');
        break;
    default : console.log('Trip to Switzerland');
}