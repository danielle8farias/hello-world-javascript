//função é chamada ao clicar o botão
function enviar() {
    //criando variável
    //pegando elemento pelo id do html
    let nome = document.getElementById('nome')

    //criando variável para receber resposta
    let res = document.getElementById('res')

    //é necessário pegar o 'valor' do objeto string
    //convertendo para maiúsculo
    let maius = nome.value.toUpperCase()

    //escrevendo a resposta no html
    res.innerHTML = `<p>Seu nome em maiúsculo: ${maius}</p>`

    let minus = nome.value.toLowerCase()
    res.innerHTML += `<p>Seu nome em minúsculo: ${minus}</p>`

    //atribuindo a variável o número de caracteres da string
    //tem que colocar essa krlh do value
    let tamanho = nome.value.length
    res.innerHTML += `<p>Seu nome tem ${tamanho} letras.</p>`
}
