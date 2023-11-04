const { sum, fromDollarToYen } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.07; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One dollar should be  156.5 yens", function(){
    
    const { fromDollarToYen } = require('./app.js')

    const yens = fromDollarToYen(3.5)

    const expected = 3.5 * 156.5; 
    
    expect(expected).toBe(yens);
})

test("One yen should be 0.87 pounds", function(){
   
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(3.5)

    const expected = 3.5 * 0.87; 
    
    expect(expected).toBe(pounds);
})










