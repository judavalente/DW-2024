const ipJson = [];
const getIp = document.querySelector('#getIp');
const inputIp = document.querySelector('#inputIp');
const ipTable = document.querySelector('#ipTable');

getIp.addEventListener('click', addIp);
inputIp.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addIp();
  }
});

function addIp() {
  const ipAddress = inputIp.value.trim();

  if (!ipAddress) {
    const alertInfo = document.querySelector('#alert-info');
    alertInfo.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Opa!</strong> Parece que você não digitou um IP válido.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`;
    return;
  }

  if (ipJson.length === 0) {
    //document.querySelector('.tabela').style.display = 'inherit';
    ipTable.innerHTML = `<thead><tr><th>IP</th><th>Org</th><th>Country</th><th>City</th><th>Clear</th></tr></thead><tbody></tbody>`;
  }

  if (!ipJson.some(entry => entry.ip === ipAddress)) { // Verifica se o IP já foi adicionado
    const ipTableBody = document.querySelector('tbody');
    const url = `https://ipinfo.io/${ipAddress}/json?token=ea38c5437881ca`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(values => {
        const ip = values.ip || '-';
        const city = values.city || '-';
        const country = values.country || '-';
        const org = values.org ? values.org.substr(values.org.indexOf(' ') + 1) : '-';

        const addJson = {
          ip,
          city,
          country,
          org,
          close: `<i class="fa fa-times" style="font-size: 22px;" data-index="${ipJson.length}">remover</i>`,
        };

        ipJson.push(addJson);
        render();
      })
      .catch(error => {
        console.error('Erro ao obter informações do IP:', error);
        alert('Erro ao buscar informações do IP. Por favor, tente novamente.');
      });
  }
}

function render() {
  let textTable = '';
  const ipTableBody = document.querySelector('tbody');

  ipJson.forEach((entry, index) => {
    textTable += `<tr><td>${entry.ip}</td><td>${entry.org}</td><td>${entry.country}</td><td>${entry.city}</td><td><a href="#" onclick="removeIp(${index})">${entry.close}</a></td></tr>`;
  });

  ipTableBody.innerHTML = textTable;
}

function removeIp(index) {
  ipJson.splice(index, 1);
  render();
}