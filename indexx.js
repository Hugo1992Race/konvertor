document.getElementById('convertbutton').addEventListener('click', function() {
    const input = document.getElementById('temp-input');
    const tempValue = parseFloat(input.value.trim());
    const fromUnit = document.getElementById('temp-select-from').value;
    const toUnit = document.getElementById('temp-select-to').value;
    const resultElement = document.getElementById('result');
    const historyList = document.getElementById('history-list');

    if (isNaN(tempValue)) {
        alert('Введите температуру');
        return;
    }

    if (fromUnit === '' || toUnit === '') {
        alert('Выберите еденицы измерения');
        return;
    }

    let convertedValue;

    if (fromUnit === 'Celsius') {
        if (toUnit === 'fahrenheit') {
            convertedValue = (tempValue * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedValue = tempValue + 273.15;
        } else {
            convertedValue = tempValue; // Цельсий в Цельсий
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'Celsius') {
            convertedValue = (tempValue - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            convertedValue = (tempValue - 32) * 5/9 + 273.15;
        } else {
            convertedValue = tempValue; // Фаренгейт в Фаренгейт
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'Celsius') {
            convertedValue = tempValue - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedValue = (tempValue - 273.15) * 9/5 + 32;
        } else {
            convertedValue = tempValue; // Кельвин в Кельвин
        }
    }

    resultElement.textContent = `Результат: ${convertedValue.toFixed(2)} ${toUnit}`;

    const li = document.createElement('li');
    li.textContent = `${tempValue} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
    historyList.appendChild(li);

    document.getElementById('clear').addEventListener('click', function() {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';
    })
})