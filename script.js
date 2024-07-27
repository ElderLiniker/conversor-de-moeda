
/* ex;
 valorconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency: "BRL"
    }).format(convert)

    ---serve para converter em dolar,  real etc.


ex;
    valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",currency: "USD"
    }).format(convertido)




 */






const meubotao = document.querySelector(".buttonconverter")
const currencyselect = document.querySelector(".currency-select")

function meuinput1() {
    const convert = document.querySelector(".meuinput").value
    document
    const valorconverter = document.querySelector(".currency-value-real")
    const valorconvertido = document.querySelector(".currency-value")




    const dolardia = 5.2
    const eurodia = 6.2
    const libradia = 6.8
    const bitcoin = 371.972




    if (currencyselect.value == "dolar") {
        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(convert / dolardia)

    }// se o select estiver selecionado o valor do dolar entre aqui//

    if (currencyselect.value == "euro") {
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convert / eurodia)

    }// se o select estiver selecionado o valor do euro entre aqui/
    if (currencyselect.value == "libra") {
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(convert / libradia)

    }

    if (currencyselect.value == "bitcoin") {
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "BTC"
        }).format(convert / bitcoin)

    }
   




    valorconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(convert)



}

function changecurrency() {
    const currencyname = document.getElementById("currency-name")
    const currencyimagem = document.querySelector(".minha-imagem")


    if (currencyselect.value == "dolar") {
        currencyname.innerHTML = "Dólar americano"
        currencyimagem.src = "./assets/dolar.png"
    }

    if (currencyselect.value == "euro") {
        currencyname.innerHTML = "euro"
        currencyimagem.src = "./assets/euro copy.png"
    }

    if (currencyselect.value == "libra") {
        currencyname.innerHTML = "Libra"
        currencyimagem.src = "./assets/libra.png"
    }


    if (currencyselect.value == "bitcoin") {
        currencyname.innerHTML = "Bitcoin"
        currencyimagem.src = "./assets/bitcoin.png"
    }


    meuinput1()
    



}
currencyselect.addEventListener("change", changecurrency)



meubotao.addEventListener("click", meuinput1)

