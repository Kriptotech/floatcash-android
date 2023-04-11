// pega 500 que sera o number,
// o valor do levantamento nesse intrevalo eh por exemplo 2.4,
// entao faz 2.4 * 0.6 = 1.3.
// entao 500+1.3= 501.3 sera o valor a entregar.

// float = deposito
// dinheiro = levantamento

// console.log(calcDinheiro(755));

export function calcDinheiro(value) {
    const fixedValue = 0.6;
    let number = Number(value);

    if (number >= 0 && number <= 100) {
        let taxa_de_dinheiro = 1.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 101 && number <= 250) {
        let taxa_de_dinheiro = 3.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 251 && number <= 500) {
        let taxa_de_dinheiro = 3.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 501 && number <= 750) {
        let taxa_de_dinheiro = 3.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 751 && number <= 1000) {
        let taxa_de_dinheiro = 4.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 1001 && number <= 1250) {
        let taxa_de_dinheiro = 6.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 1251 && number <= 1500) {
        let taxa_de_dinheiro = 6.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 1501 && number <= 1750) {
        let taxa_de_dinheiro = 7.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 1751 && number <= 2000) {
        let taxa_de_dinheiro = 8.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 2001 && number <= 2250) {
        let taxa_de_dinheiro = 9.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 2251 && number <= 2500) {
        let taxa_de_dinheiro = 12.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 2501 && number <= 2750) {
        let taxa_de_dinheiro = 12.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 2751 && number <= 3000) {
        let taxa_de_dinheiro = 12.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 3001 && number <= 4000) {
        let taxa_de_dinheiro = 15.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 4001 && number <= 5000) {
        let taxa_de_dinheiro = 19.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 5001 && number <= 10000) {
        let taxa_de_dinheiro = 30.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 10001 && number <= 15000) {
        let taxa_de_dinheiro = 57.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 15001 && number <= 20000) {
        let taxa_de_dinheiro = 57.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
    if (number >= 20001 && number <= 25000) {
        let taxa_de_dinheiro = 98.0 * fixedValue;
        let valor_de_dinheiro_a_entregar = number + taxa_de_dinheiro;
        let valor_de_dinheiro_a_receber = number;

        let resultado_de_calculo_de_dinheiro = {
            valor_de_dinheiro_a_entregar,
            valor_de_dinheiro_a_receber,
            taxa_de_dinheiro,
        };

        return resultado_de_calculo_de_dinheiro;
    }
}
