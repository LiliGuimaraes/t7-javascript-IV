const nomesNoRole = [
    "Amanda", "Ana", "Andrezza", "Beatriz", "Brennda", "Carina", "Gabriela", "Giovanna", "Ingrid Pitta", "Ingrid Nascimento", "Isabela", "Jessica", "Josiane", "Julia", "Kamila", "Luciane", "Marília", "Mayara", "Michelle", "Nina", "Rafaela", "Raissa", "Roberta", "Talita", "Vinólia", "Vitória"
]

const valida = (name) => {
    if (name === "") throw 'O campo está vazio'
    if (typeof name !== "string") throw "Tipo inválido"
}

const findName = name => nomesNoRole.find((person, i) => {
    return name.toLowerCase() === person.toLowerCase()
})

const showsName = name => {
    const estaNaLista = findName(name)
    if (estaNaLista) {
        document.getElementById("name").classList.add("is-valid")
        document.getElementById("statusResult").innerHTML = `${estaNaLista} estava no rolê`
        return
    }
    throw `${name} nãããão estava no rolê`
}

document.getElementById("form-role").addEventListener("submit", function(event) {
    event.preventDefault()
    document.getElementById("statusResult").innerHTML = ""
    if (document.getElementById("name").classList.contains("is-valid")) {
        document.getElementById("name").classList.remove("is-valid")
    }
    if (document.getElementById("name").classList.contains("is-invalid")) {
        document.getElementById("name").classList.remove("is-invalid")
    }

    const checkField = document.getElementsByClassName("name").value
    try {
        valida(checkField)
        showsName(checkField)
        console.log("Sucesso")
    } catch (erro) {
        console.log("ops")
        document.getElementById("statusResult").innerHTML = erro
        document.getElementById("name").classList.add("is-invalid")
    }
})