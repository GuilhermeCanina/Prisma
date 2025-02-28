
fetch('http://localhost:3000/comidas')
    .then(response => response.json())
    .then(data => console.table(data))



function cadastrar() {
    let dados = {
        nome: document.getElementById('nome').value,
        preco: parseFloat(document.getElementById('preco').value)
    }
    fetch('http://localhost:3000/comidas',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(resp => {
            alert("Comidas cadastrado com sucesso!");
            window.location.reload();
        });
}

fetch('http://localhost:3000/comidas')
.then(response => response.json())
.then(comidas => {
    const tabela = document.getElementById('comidas');
    comidas.forEach(comida => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${comida.nome}</td>
            <td>R$${comida.preco}</td>
        `;
        tabela.appendChild(linha);
    });
});