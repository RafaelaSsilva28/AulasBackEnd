

function Pi() {
    return 3.1415;
}
function raio(circuferencia) {
    let pi = Pi();
    let area = pi * (2 * raio)
    console.log('a area da circuferencia do raio é ', raio, 'é', area);
    
}
console.log(raio(10));

//função anonima
const Pi = function() {
    return 3.1415;
}
const Pi = function (circuferencia) {
    let pi = Pi();
    let area = pi * (2 * raio)
    console.log('a area da circuferencia do raio é ', raio, 'é', area);
    
}
console.log(raio(10));
//FUNÇÃO ARROW
const Pi = () => {
    return 3.1415;
}
const Pi = (circuferencia) => {
    let pi = Pi();
    let area = pi * (2 * raio)
    console.log('a area da circuferencia do raio é ', raio, 'é', area);
    
}