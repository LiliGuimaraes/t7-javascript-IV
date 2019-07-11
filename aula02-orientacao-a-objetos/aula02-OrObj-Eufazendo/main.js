class botao {
    constructor(cor, tamanho, texto, icons, radiu) {
        this.cor = cor
        this.tamanho = tamanho
        this.texto = texto
        this.icons = icons
        this.radiu = radiu
    }

    drawButton() {
        const newButton = document.createElement('div')
        newButton.setAttribute('class', `${this.button} ${this.tamanho} ${this.texto}`)

        if (this.icone) {
            const tagIcone = document.createElement('i')
                //create CSS class to insert an faicon icon
            tagIcone.setAttribute('class', `fas ${this.icone}`)

            newButton.appendChild(tagIcone)

            const text = document.createTextNode(this.texto)
            newButton.appendChild(text)
        } else {
            newButton.innerHTML = this.texto
        }

        document.getElementById('buttons').appendChild(newButton)
    }
}

const novoBotao = new newButton('verde', 'grande', 'me aperta')
console.log(novoBotao)

novoBotao.drawButton()