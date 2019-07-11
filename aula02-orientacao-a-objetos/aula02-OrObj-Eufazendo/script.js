class Button {
    constructor(cor, tamanho, texto, icons, radiu) {
        this.cor = cor
        this.tamanho = tamanho
        this.texto = texto
        this.icons = icons
        this.radiu = radiu
    }

    drawButton() {
        const novoBotao = document.createElement('button')
        novoBotao.setAttribute('class', `${this.button} ${this.tamanho} ${this.texto}`)

        if (this.icone) {
            const tagIcone = document.createElement('i')
                //create CSS class to insert an faicon icon
            tagIcone.setAttribute('class', `fas ${this.icone}`)

            novoBotao.appendChild(tagIcone)

            const text = document.createTextNode(this.texto)
            novoBotao.appendChild(text)
        } else {
            novoBotao.innerHTML = this.texto
        }

        document.getElementById('button').appendChild(novoBotao)
    }
}

const OtoBotao = new Button('verde', 'grande', 'me aperta')
console.log(OtoBotao)

OtoBotao.drawButton();

class Imagem {
    constructor(image, legenda, borda) {
        this.image = image
        this.lengenda = legenda
        this.borda = borda
    }

    newImage() {
        const novaImage = document.createElement('img')
        novaImage.setAttribute('src', `${this.image}`)
        document.appendChild(novaImage)
        document.getElementById('sessao-image').appendChild(novaImage)

        const legend = document.createElement('figure')
        legend.setAttribute('class', `${this.legenda}`)
        document.appendChild(legend)
        document.getElementById('sessao-image').appendChild(legend)
    }
}

const imagemGatinho = new Image('gatinho', 'GatinhoFofo', 'rosa')
console.log(imagemGatinho)
imagemGatinho.newImage()