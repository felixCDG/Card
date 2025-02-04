'use strict'

const cidades = [
    {nome:'Jandira', cor:'red', icon:'mapa.png'  },
    {nome:'Veloso', cor: 'green', icon:'veloso.png' },
    {nome:'Carapicuiba', cor: 'purple', icon:'predio.png' },
    {nome:'Itapevi', cor: 'pink', icon:'gg.png' },
    {nome:'Olga', cor: 'blue', icon:'floresta.png'}
]

function criarMenu(cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImag = document.createElement('img')

    novaImag.src = `./icons/${cidade.icon}`


    novoLink.href = '#'
    novoLink.textContent = cidade.nome
    
    novoItem.appendChild(novaImag)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    menu.appendChild(novoItem)
}

cidades.forEach(criarMenu)




// criarMenu()