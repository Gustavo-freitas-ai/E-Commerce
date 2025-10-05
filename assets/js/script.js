document.addEventListener("DOMContentLoaded", () => {
    const inputCEP = document.getElementById("input_CEP");
    const inputRua = document.getElementById("input_RUA");
    const inputEstado = document.getElementById("input_ESTADO");
    const inputBairro = document.getElementById("input_BAIRRO");

    // Quando sair do campo CEP
    inputCEP.addEventListener("blur", () => {
        let cep = inputCEP.value.replace(/\D/g, ''); // só números

        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/01001000/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        inputRua.value = data.logradouro;
                        inputBairro.value = data.bairro;
                        inputEstado.value = data.uf;
                    } else {
                        alert("CEP não encontrado!");
                        inputRua.value = "";
                        inputBairro.value = "";
                        inputEstado.value = "";
                    }
                });     
    });
});