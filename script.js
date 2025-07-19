const options = ['BTC', 'EUR', 'USD'];
const optionsElement = document.getElementById('options');
const conversorElement = document.getElementById('conversor');

const onClickOption = (id, value) => {
  axios.get(`https://economia.awesomeapi.com.br/all/${id}`).then((res) => {
    const data = res.data;
    const code = id.split('-')[0];
    const COIN = Number(value * data[code].ask);

    const element = document.getElementById('result');

    element.textContent = `A conversão para ${code} está em ${new Intl.NumberFormat(
      'pt-BR',
      { currency: 'BRL', style: 'currency' }
    ).format(COIN)}`;

    conversorElement.appendChild(element);
  });
};

for (let i = 0; i < options.length; i++) {
  const option = options[i];
  const button = document.createElement('button');
  button.id = `${option}-BRL`;
  button.setAttribute('selected', false);
  button.textContent = `Converter ${option}`;

  button.addEventListener('click', (ev) => {
    const currentElement = ev.currentTarget;
    const input = document.getElementById('coin-value');

    if (!!input.value) {
      onClickOption(currentElement.id, input.value);

      input.value = null;
    }
  });

  optionsElement.appendChild(button);
}
