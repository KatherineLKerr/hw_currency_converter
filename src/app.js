import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      euro: 1,
      rates: [],
      selectedCurrencyToEur: "",
      selectedCurrencyFromEur: "",
      currencyAmountToEur: "",
      currencyAmountFromEur: ""
    },//end of data
    computed: {

    },//end of computed
    mounted(){
      this.getCurrencies();
      // this.printCurrencyRates();
    }, //end of mounted
    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(currencyList => this.rates = currencyList.rates)
      },//end of get currencies
      convertFromEur: function(){
        let amount = this.selectedCurrencyFromEur * this.currencyAmountFromEur
        const placeholder = document.querySelector('#converted-from')
        placeholder.textContent = amount.toFixed(2)
      },//end of convertFromEur
      convertToEur: function(){
        let amount = this.currencyAmountToEur / this.selectedCurrencyToEur
        const placeholder = document.querySelector('#converted-to')
        placeholder.textContent = amount.toFixed(2)
      }
    }//end of methods
  })//end of new Vue
}); //end of document.addEventListener
