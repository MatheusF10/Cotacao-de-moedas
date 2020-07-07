axios.get('https://economia.awesomeapi.com.br/json/all')
.then(function(response){
    
    
    const EUR = Number(response.data.EUR.high)
    const USD = Number(response.data.USD.high)
    const BTC = Number(response.data.BTC.high)
    document.querySelector("#euro").textContent = `A cotação atual do euro em Real é: R$ ${EUR.toFixed(2)}`
    document.querySelector("#dolar").textContent = `A cotação atual do dolar em Real é: R$ ${USD.toFixed(2)}`
    document.querySelector('#bit').textContent = `A cotação atual do bitcoin em Real é: R$ ${BTC.toFixed(2)}`
    
    
    
})
.catch(function(error){
    console.warn(error)
})
axios.get('https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL')
.then(function(response){
   
    const EUR = Number(response.data.EUR.high)
    const USD = Number(response.data.USD.high)
    const conv = document.querySelector('#conv1').addEventListener("click", function(){
        const mostraUSD = document.getElementById('mostraUSD').textContent = USD.toFixed(2) * document.querySelector('#conUSD').value + " R$"
        if(mostraUSD === 0 + " R$"){
            alert('você deve digitar um número')
            
        }else{
            
        }
    })
    const conv2 = document.querySelector('#conv2').addEventListener("click", function(){
        const mostraEUR = document.getElementById('mostraEUR').textContent = EUR.toFixed(2) * document.querySelector('#conEUR').value + " R$"
        if(mostraEUR == 0 + " R$"){
            alert('você deve digitar um número')
            
        }else{
            
        }
    })
    
    
    
})
.catch(function(error){
    console.warn(error = console.log('ocorreu um erro'))
})
const del1 = document.querySelector("#delete1").addEventListener("click", function(){
    document.querySelector("#conUSD").value = ""
    document.querySelector('#mostraUSD').textContent = ""
})
const del2 = document.querySelector("#delete2").addEventListener("click", function(){
    document.querySelector("#conEUR").value = ""
    document.querySelector('#mostraEUR').textContent = ""
})