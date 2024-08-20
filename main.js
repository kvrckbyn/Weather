const cityInput = document.querySelector(".inputText")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () =>{
   
    const cityName = cityInput.value

    getData(cityName)

} )


    function getData(name){
        const API="64e62c2f4b8eb130951c57eef0229939";
        const baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
   
       // console.log(fetch(baseURL))

       fetch(baseURL)
       .then(res => res.json())
       .then(data => {
        const {name, sys:{country}, main:{temp, feels_like, humidity}, weather: [{description}], wind:{speed}} = data;
        console.log(name, country, temp, feels_like, humidity, description, speed)

        const city = document.querySelector(".city")
        const temperature = document.querySelector(".temp")
        const hum = document.querySelector(".humidity")
        const wind = document.querySelector(".wind")
        const weatherDesc = document.querySelector(".weather")
        const feeling = document.querySelector(".feeling")
        console.log(city, temperature, feeling, weatherDesc, hum, wind)

        city.textContent =` ${name}, ${country}`;
        temperature.innerText = `${temp}`;
        hum.textContent =`Nem: %${humidity}`
        wind.innerHTML = `<i>Rüzgar: ${speed}km/s</i>`
        weatherDesc.innerHTML = `<i>${description.toUpperCase()}</i>`
        feeling.textContent = `Hissedilen: ${feels_like}`
       })
       .catch(err => console.log(err))

       cityInput.value ="";
       cityInput.focus();
}