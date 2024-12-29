const apiKey = "445a9b6603cd22600dae9f5e46add214";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let cityName = document.querySelector(".cityName");
let clickBtn = document.querySelector(".search-btn");
let weaImg = document.querySelector(".weaImg");

async function weather(name){
     let responce = await fetch(apiUrl + `&q=${name}` + `&appid=${apiKey}`);
     var data = await responce.json();
     console.log(data);
    
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = data.main.temp + `°C`;
     document.querySelector(".humid").innerHTML = data.main.humidity + `%`;
     document.querySelector(".windy").innerHTML = data.wind.speed + `km/h`;

     if(data.weather[0].main === "Rain"){
          weaImg.src = "images/rain.png"
     }else if(data.weather[0].main === "Mist"){
        weaImg.src = "images/mist.png"
     }else if(data.weather[0].main === "Snow"){
        weaImg.src = "images/snow.png"
     }else if(data.weather[0].main === "Drizzle"){
        weaImg.src = "images/drizzle.png"
     }else if(data.weather[0].main === "Clouds"){
        weaImg.src = "images/clouds.png"
     }else{
        weaImg.src = "images/clear.png"
     }

}

clickBtn.addEventListener("click", () => {
    let values = cityName.value;
    weather(values);
})

cityName.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        let values = cityName.value;
        weather(values);
    }
})

