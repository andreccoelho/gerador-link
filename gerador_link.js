document.getElementById('generateLinkBtn').addEventListener('click', function () {
    const fileInput = document.getElementById('fileInput');
    const filePathInput = document.getElementById('filePath');
    
    let filePath = '';
    let fileName = '';
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileName = file.name; 
    }

    if (filePathInput.value) {
        filePath = filePathInput.value; 
    }

    if (filePath && fileName) {
        const fullPath = `${filePath}\\${fileName}`; 
        
        const link = gerarLink(fullPath);
        document.getElementById('result').textContent = `Link gerado: ${link}`;
    } else {
        document.getElementById('result').textContent = 'Por favor, selecione um arquivo e insira o caminho manualmente.';
    }
});

function gerarLink(filePath) {
    const caminhoAntigo = "\\bndes.net\\bndes\\Aplicacoes\\SiteBNDES\\4.PRD";
    const novoDominio = "http://www.bndes.gov.br";

    let caminhoFinal = filePath.replace(/\\/g, '/'); 

    if (caminhoFinal.startsWith('/')) {
        caminhoFinal = caminhoFinal.substring(1);
    }

    caminhoFinal = caminhoFinal.replace(caminhoAntigo.replace(/\\/g, '/'), novoDominio); 
    
    return caminhoFinal;
}
