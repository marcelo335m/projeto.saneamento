const corpo = document.getElementById('corpo')

if (document.getElementById('enviar_msg') != null) {
    const botao = document.getElementById('enviar_msg')
    botao.addEventListener('click', () => {
        chatbot()
    })
}

// Os status determina a cor do campo e o número e o número da rua e o nome e o nome da rua

function campo(statu, numero, nome_rua) {
    // campo aonde ficar os dados
    const campo1 = document.createElement('div')

    campo1.classList.add("campo1")

    corpo.appendChild(campo1)

    // nome do bairro

    const nome = document.createElement('p')
    const caixa_dados = document.createElement('div')
    caixa_dados.classList.add('caixa__dados')
    caixa_dados.appendChild(nome)

    campo1.appendChild(caixa_dados)

    // mostrando status
    const p_stats = document.createElement('p')
    p_stats.classList.add("p_stats")

    campo1.appendChild(p_stats)

    // colocado os dados
    let dados = fetch('bc.json').then(dados => dados.json()).then(dados => {
        nome.innerHTML = dados.endereco[nome_rua] + '<br>' + "manunteção"
        p_stats.innerHTML = dados.endereco[statu]

        switch(dados.endereco[statu]) {
            case 'Realizado':
                campo1.classList.add('bg__verde')
                break
    
            case 'Processo':
                campo1.classList.add('bg__cinza')
                break
    
            case 'Não realizado':
                campo1.classList.add('bg__vermelho')
                break
        }
    })
}

function display()
{
    let dados = fetch('bc.json').then(dados => dados.json()).then(dados => {
        for (let i = 0; i < parseInt(Object.keys(dados.endereco).length / 3); i++) {
            let statu = "status" + (i + 1).toString()
            let numero = "numero" + (i + 1).toString()
            let nome_rua = "nome" + (i + 1).toString()

            campo(statu, numero, nome_rua)
        }
    })
}

function dados()
{
    const dados1 = document.getElementById('dados123')

    const dados2 = fetch("bc.json").then(dados2 => dados2.json()).then(dados2 => {
        dados1.innerHTML = dados2.data.data1 + " a " + dados2.data.data15
    })
}

function chatbot()
{
    let chatbot1 = document.getElementById("text__chatbot")
    const user_txt = document.getElementById("text__usuario")
    let frase = document.getElementById('prompt').value
    frase = frase.toLowerCase()
    let copy_frase = frase.split(' ')
    frase = document.getElementById('prompt')

    document.getElementById('prompt').value = ""

    let bot_frases = {
        "olá" : "Oi seja bem vindo a nossos serviços",
        "ola" : "Oi seja bem vindo a nossos serviços",
        "olá," : "Oi seja bem vindo a nossos serviços",
        "ola," : "Oi seja bem vindo a nossos serviços",
        "atendente" : "Para falar com um de nosso atendentes entre na aba contato",
        "solicitação" : "Ser você gostaria de fazer uma solicitação entre na aba contato",
        "solicitaçao" : "Ser você gostaria de fazer uma solicitação entre na aba contato",
        "solicitacao" : "Ser você gostaria de fazer uma solicitação entre na aba contato",
        "solicita" : "Ser você gostaria de fazer uma solicitação entre na aba contato",
        "tchau" : "Tchau até logo",
        "até mas" : "Tchau até logo",
        "ate mas" : "Tchau até logo",
        "" : "Desculpe não entedi digite algo"
    }

    for (let i = 0; i < copy_frase.length; i++) {
        chatbot1.innerHTML = bot_frases[copy_frase[i]]

        if (bot_frases[copy_frase[i]] != undefined) {
            break
        }

        if (i == copy_frase.length - 1 && bot_frases[copy_frase[i]] == undefined) {
            chatbot1.innerHTML = "Desculpe não entedi"
        }
    }
}