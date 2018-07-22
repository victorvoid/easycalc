import withHandlers from 'recompose/withHandlers'

export default withHandlers({
  onChange: (props) => (e) => {
    props.updateGrossSalary(e.target.value)
  },
  withholdingTax  (salario = 0, inss = 0, nDependentes = 0) {
    const baseCalculo = (salario - inss - (nDependentes * 189.59)).toFixed(2)

    if (salario <= 1903.98) {
      return 0
    }

    if (salario >= 1903.99 && salario <= 2826.65) {
      return 0.075 * baseCalculo - 142.80
    }

    if (salario >= 2826.66 && salario <= 3751.05) {
      return 0.15 * baseCalculo - 354.80
    }

    if (salario >= 3751.06 && salario <= 4664.68) {
      return 0.225 * baseCalculo - 636.13
    }

    return 0.275 * baseCalculo - 869.36
  },
  socialSecurity  (salario = 0) {
    if (salario <= 1693.72) {
      return 0.08 * salario
    }

    if (salario >= 1693.73 && salario <= 2822.90) {
      return 0.09 * salario
    }

    if (salario >= 2822.91 && salario <= 5645.80) {
      return 0.11 * salario
    }

    return 621.04
  },

  formatNumber (valor) {
    return Number(String(valor).replace(/\./g, '').replace(/,/g, '.'))
  },

  validForm () {
    return this.state.salarioBruto && this.state.nDependentes && this.state.outrosDescontos
  }
})
