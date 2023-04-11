// pega 500 que sera o number,
// o valor do deposito nesse intrevalo eh por exemplo 2.4,
// entao faz 2.4 * 0.6 = 1.3.
// entao 500+1.3= 501.3 sera o valor a entregar.

// float = deposito
// dinheiro = levantamento

// console.log(calcFloat(17000.6));

export function calcFloat(value) {
    const fixedValue = 0.6;
    let number = Number(value);

    if (number >= 0 && number <= 100) {
        let taxa_de_float = 0.9 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 101 && number <= 250) {
        let taxa_de_float = 1.8 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 251 && number <= 500) {
        let taxa_de_float = 2.2 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 501 && number <= 750) {
        let taxa_de_float = 2.2 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 751 && number <= 1000) {
        let taxa_de_float = 3.6 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 1001 && number <= 1250) {
        let taxa_de_float = 5.1 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 1251 && number <= 1500) {
        let taxa_de_float = 5.1 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 1501 && number <= 1750) {
        let taxa_de_float = 6.8 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 1751 && number <= 2000) {
        let taxa_de_float = 7.6 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 2001 && number <= 2250) {
        let taxa_de_float = 8.5 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 2251 && number <= 2500) {
        let taxa_de_float = 9.3 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 2501 && number <= 2750) {
        let taxa_de_float = 10.3 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 2751 && number <= 3000) {
        let taxa_de_float = 12.7 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 3001 && number <= 4000) {
        let taxa_de_float = 12.7 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 4001 && number <= 5000) {
        let taxa_de_float = 16.2 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 5001 && number <= 10000) {
        let taxa_de_float = 25.6 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 10001 && number <= 15000) {
        let taxa_de_float = 48.6 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 15001 && number <= 20000) {
        let taxa_de_float = 60 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
    if (number >= 20001 && number <= 25000) {
        let taxa_de_float = 84.2 * fixedValue;
        let valor_de_float_a_entregar = number + taxa_de_float;
        let valor_de_float_a_receber = number;

        let resultado_de_calculo_de_float = {
            valor_de_float_a_entregar,
            valor_de_float_a_receber,
        };

        return resultado_de_calculo_de_float;
    }
}
