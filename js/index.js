// Função para inicializar o código quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Captura do botão de verificação de resultado
    const verificarResultadoBtn = document.getElementById('verificarResultado');

    // Adiciona um ouvinte de evento de clique ao botão de verificação
    verificarResultadoBtn.addEventListener('click', function() {
        // Variável para armazenar a pontuação
        let pontos = 0;

        // Função para verificar a resposta de uma pergunta específica
        function verificarResposta(idPergunta, respostaCorreta) {
            const select = document.querySelector(`#${idPergunta}`);
            if (select.value === respostaCorreta) {
                pontos += 10;
            }
        }

        // Chamadas para verificar cada pergunta individualmente
        verificarResposta('Dhelmise', 'Certo');
        verificarResposta('Eternatus', 'Certo');
        verificarResposta('Steven', 'Certo');
        verificarResposta('Diantha', 'Gardevoir');
        verificarResposta('Palkia', 'Sinnoh');
        verificarResposta('TrioDoLago', 'Azelf');
        verificarResposta('TeamGalactic', 'Cyrus');
        verificarResposta('LigaKalos', 'Alain');
        verificarResposta('Pseudo', 'Salamance');
        verificarResposta('Mega', 'Keldeo');

        // Exibição do resultado
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<h2>Resultado</h2><br> Pontos: ${pontos}`;
    });
});
