const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const textBox = document.getElementById("textBox");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const span = document.getElementById("span");
let temperature;


function convert(){

    if(toFahrenheit.checked){
        temperature = Number(textBox.value);
        temperature = (temperature * 9/5) + (32);
        span.innerHTML = `${temperature.toFixed(2)} °F`;
    }
    else if(toCelsius.checked){
        temperature = Number(textBox.value);
        temperature = (temperature - 32) * (5/9);
        span.innerHTML = `${temperature.toFixed(1)} °C`;
    }
    else{
        span.innerHTML = "Please select a conversion type.";
    }
}