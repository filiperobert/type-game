class app {
    startApp() {
        this.listWordscomplete = ['cavalos', 'homens', 'pedro', 'bola', 'deus', 'fiel', 'marlon', 'humanos', 'twitter', 'igreja', 'biblia', 'carros', 'velocidade', 'arroz', 'panela', 'computador', 'videogame', 'laranja', 'arvore', 'diabete', 'presidente', 'dinheiro', 'feriado', 'luz', 'negro', 'branco', 'racismo', 'cavaleiro', 'pintor', 'escritor', 'murro', 'muro', 'mouse', 'rato', 'elefante', 'leite', 'desodorante', 'pia', 'garagem', 'porta', 'chave', 'tiro', 'arma', 'janela', 'pedreiro', 'motoqueiro', 'fantasma', 'Carlos', 'janeiro', 'dezembro', 'de', 'da', 'em', 'min', 'tu', 'nós', 'a', 'um', 'dois', 'cinco', 'quatro', 'dentro', 'fora', 'sempre', 'estou', 'feliz', 'aqui', 'jesus', 'entrou', 'meu', 'limpou', 'por', 'alto', 'embaixo', 'pecado', 'cabelo', 'cada', 'pedaço', 'gesto', 'amor', 'pastor', 'ovelha', 'orar', 'peidar', 'voar', 'cheirar', 'morrer', 'morte', 'dor', 'felicidade', 'paixão', 'sentimento', 'ruim', 'ou', 'bom', 'depende', 'do', 'seu', 'ponto', 'vista', 'monitor', 'teclado', 'televisão', 'profeta', 'banheiro', 'privada', 'espelho', 'chão', 'chuveiro', 'escada', 'lombada', 'moto', 'caminhão', 'avião', 'ar', 'vento', 'polícia', 'exercito', 'calçada', 'rio', 'mar', 'praia', 'sol', 'lua', 'noite', 'dia', 'tarde']
        this.listWords = []
        this.actualWord = 0
        this.points = 0
        this.correctedWorks = 0
        this.correctedDigit = 0
        this.incorrentDigit = 0
        this.actived = false
        this.listQuery = document.getElementById("list-words")

        // inicia o código
        this.randomizarLista()
        this.atualizarLista()

               
    }
    starDigits(){
        this.actived = true
        let segundos = 60
        let intervalId = setInterval(() => {
            segundos--
            document.getElementById("segundos").innerText = `0:${segundos}`
            if(segundos == 0) {
                clearInterval(intervalId)
                this.gerenatedDivResulted()
                this.startApp()
                alert("Fim de jogo !")
            }
        }, 1000)

    }

    digitar(element){
        if (!this.actived){
            this.starDigits()
        }
        let letra = element.value
        let palavras = this.listWords
        console.log(letra[this.actualWord], palavras[0][this.actualWord])
        if (letra == " "){
            element.value = ""
        }
        // Compara se a letra enviada é igual a a primeira letra da primeira palavra do texto
        else if (letra[this.actualWord] == palavras[0][this.actualWord]){
            this.correctWord(palavras, element)
        }
        else{
            this.incorrentDigit++
        }
    }

    correctWord(palavras, element){
        this.correctedDigit++
        // reescreve a primeira palavra do texto sem a primeira letra (a que foi escrita já) na lista palavras
        this.actualWord += 1
        this.atualizarGreenOrNot(this.listWords[0], true)
        // console.log(this.actualWord, palavras[0].length)
        if (this.actualWord == palavras[0].length){
            console.log("Teste")
            this.correctedWorks++
            element.value = ""
            this.actualWord = 0
            this.listWords.shift()
            this.points += 1
            this.listWords.push(this.listWordscomplete[this.randomiziii(this.listWordscomplete )-1])
            this.atualizarLista() 
        }

    }
    // reescreve a palavra sem a primeira letra e retorna
    reescrever(atualPalavra){
        let palavra = ""
        for (var i = 0; i < atualPalavra.length; i++){
            if (i != 0){
                palavra += atualPalavra[i]
            }
        }
        return palavra
    }
    // adiciona as palavras da listaWords no HTML
    atualizarLista(){
        this.listQuery.innerText = ""
        this.listWords.forEach(palavra => {
            this.listQuery.innerHTML += ` ${palavra}`
        })
    }

    atualizarGreenOrNot(palavras, correct = false) {
        this.listQuery.innerHTML = "";
        if (correct) {
            console.log('Executou em cima')
            this.listQuery.innerHTML = `<span style="background-color: yellowgreen;">${this.letrinhaVerdinha(palavras)}</span>`;
            for (var i = 0; i < palavras.length; i++) {
                if (i >= this.actualWord) {
                    this.listQuery.innerHTML += `${palavras[i]}`
                }
            }
            console.log('Executou segunda camada em cima')
            this.listWords.forEach(palavra => {
                if (palavra != palavras)
                    this.listQuery.innerHTML += ` ${palavra}`
            })
        } 
    }

    letrinhaVerdinha(palavras){
        let frase = ""
        console.log('Executou aqui')
        console.log(this.actualWord)
        for(var i = 0; i != this.actualWord; i++){
            frase += palavras[i]
            console.log('frase')
            console.log(frase)
        }
        return frase
    }
    
    // rpega uma palavra aleatoria da lista completa atráves do número random.
    randomizarLista(){
        console.log(this.listWordscomplete.length)
        for (var i = 0; i < 50;){
            let randomNumber = this.randomiziii(this.listWordscomplete)
            if (!this.listWords.includes(this.listWordscomplete[randomNumber -1])){
                this.listWords.push(this.listWordscomplete[randomNumber -1])
                i++
            }
        }
    }
    // random número (temporario)
    randomiziii(list){
        let randomNumber = list.length + 1
        let randomNumber2

        while(randomNumber > list.length || randomNumber == 0){
            randomNumber = Math.round(Math.random() * 100)
            randomNumber2 = Math.round(Math.random() * 100)
            if (randomNumber2 < 50 || randomNumber > 80){
                randomNumber += randomNumber2
            }
        }
        return randomNumber
    }

    getResulted(){
        return document.querySelectorAll("div[class='resultadoDiv']").length

    }
    gerenatedDivResulted(){
        let divPai = document.querySelector("div[name='result']")
        let div = document.createElement("div")
        div.style.display = "inline-block";
        let title = document.createElement("h1")
        title.classList.add("resultadoTitle")
        div.classList.add("resultadoDiv")
        title.style.display = "inline-block";
        title.innerText = `Resultado ${this.getResulted() + 1}°`


        // Resultado informações
        
        let resultadoTExto = document.createElement('p')
        resultadoTExto.innerText = `PPM: ${this.correctedWorks} (Palavras por minuto)\nDìgitos certos:: ${this.correctedDigit}\nDìgitos errados: ${this.incorrentDigit}\n Precisão de acerto ${ Math.round(this.correctedDigit / (this.correctedDigit + this.incorrentDigit) * 100)}%` 
        div.appendChild(title)
        div.appendChild(resultadoTExto)
        divPai.appendChild(div)
    
        console.log(this.getResulted() % 3)
        if (this.getResulted() % 4 == 0){
            divPai.appendChild(document.createElement('br'))
        }
    }
}