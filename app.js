const sum = (a,b) => {
    return a + b

}

console.log(sum(7,3))



// one euro is:

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the doller value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
   
    let valueInYen = valueInDollar * oneEuroIs.JPY;
    
    return valueInYen;
}

const fromYenToPound = (valueInYen) =>{

    let valueInPound = valueInYen * oneEuroIs.GBP;

    return valueInPound;
}



module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}