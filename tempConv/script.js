function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const convertedTemperatureElement = document.getElementById('convertedTemperature');
    
    if (isNaN(temperatureInput)) {
        convertedTemperatureElement.textContent = 'Please enter a valid number.';
        return;
    }
    
    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    
    if (inputUnit === 'Celsius') {
        convertedTemperature = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)} °F, Kelvin: ${(temperature + 273.15).toFixed(2)} K`;
    } else if (inputUnit === 'Fahrenheit') {
        convertedTemperature = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)} °C, Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
    } else if (inputUnit === 'Kelvin') {
        convertedTemperature = `Celsius: ${(temperature - 273.15).toFixed(2)} °C, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }
    
    convertedTemperatureElement.textContent = convertedTemperature;
}
