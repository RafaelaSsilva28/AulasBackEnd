const celcius_para_fahrenheit = (celsius) => {
    const conta = (celsius * (9 / 5)) + 32 ;
    const retorna = {
        celsius: celsius,
            total: conta,
    }
    return retorna;
}

const quilometros_para_milhas = (km) => {
    const cont = km / 1.609;
    const retn = {
        km: km,
            total: cont,
    }
    return retn;
}

module.exports = {celcius_para_fahrenheit, quilometros_para_milhas}