//Criar um servidor local
const express = require("express")

// Referenciar os caminhos dos arquivos
// O Path lida com a leitura de caminhos de arquivos
const path = require("path")

// Declarando uma const para a porta
const port = 3333

// Declarando o caminho inicial. 
// Ela vai pegar a pasta atual e dar um join(JUNTAR) a pasta public 
// __dirname = pasta atual
let initialPath = path.join(__dirname, "public")

// Essa é a instancia
let app = express()

// Criando um servidor estático que vai servir o que está na pasta do 
// initialPath
app.use(express.static(initialPath))

// req = Requisição 
// res = Resposta
// Nesse código foi dito que após sempre o servidor for chamado e não tiver nada 
// depois da /, ele deve enviar como resposta "res" o InitialPath + o index.html
// o initialPath é a folder public
app.get("/", (req, res) =>{
    res.sendFile(path.join(initialPath, "index.html"))
})

// Nesse código é definido que o servidor tem a função de ficar escutando a porta
// Também é exibido no console uma mensagem informando que o servidor está on
app.listen(port, () => {
    console.log(`Server start up on port ${port}!`)
})