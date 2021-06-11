const temp = document.getElementById('temp');
const hum = document.getElementById('hum');
const desc = document.getElementById('desc');
const pre = document.getElementById('pre');
const ws = document.getElementById('ws');
const selectedCountry = document.getElementById('selectedCountry');


let SC = selectedCountry.value;
let temperature = 0;
let humidity = 0;
let pressure = 0;
let windSpeed = 0;

function getData(country) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=<your app id>`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        temperature = data.main.temp;
        humidity = data.main.humidity;
        pressure = data.main.pressure;
        windSpeed = data.wind.speed;
        description = data.weather[0].description;
        assignToHtml();
    })
    .catch(err => console.log(err));
}

function assignToHtml() {
	cel = (parseFloat(temperature) - 273.15).toFixed(2);
    temp.innerHTML = cel.toString() + ` &#8451;`;
    hum.innerText = humidity + 'mg/L';
    desc.innerText = description;
    ws.innerText = windSpeed + ' mph';
    pre.innerText = pressure + ' Passcal';
}

selectedCountry.addEventListener('change', (e) => {
    getData(e.target.value);
});

getData("India");