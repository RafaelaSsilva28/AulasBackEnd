function triangulo(altura, base){
    let area = (base * altura)/2;
            return area    //return area
}
triangulo(2, 2);
console.log('A area do triangulo é ', area);


//FUNÇÃO ANONIMA 
const triangulo = function (altura, base){
    let area = (base * altura)/2;
            return area    //return area
}
triangulo(2, 2);
console.log('A area do triangulo é ', area);

//FUNÇÃO ARROW 
const triangulo = (altura, base) => {
    let area = (base * altura)/2;
            return area    //return area
}
triangulo(2, 2);
console.log('A area do triangulo é ', area);

