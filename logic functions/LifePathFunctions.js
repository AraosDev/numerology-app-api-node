
const numerolgyNumbers = [1,2,3,4,5,6,7,8,9,11,22];

const getLifeNumber = (date)=>{
    let dateToInt = isNaN(date) ? parseInt(date.split('-').join('')) : date;
    let sum = 0;
    while(dateToInt){
        sum = sum + (dateToInt%10);
        dateToInt = Math.floor(dateToInt/10);
    }
    if(numerolgyNumbers.includes(sum)) return sum;
    else return getLifeNumber(sum);
} 

module.exports = getLifeNumber