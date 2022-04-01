var today = new Date()
    var date =   today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    async function getWeather() {
    try{
    let city = document.getElementById("city").value;

    let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acb6f9e7c9660a79a523ee1d55056162&units=metric`)

     data = await res.json()
    
    console.log(data)
    appendData(data)

    } catch (err) {
        console.log(err)
    }

     lat = data.coord.lat
     lon = data.coord.lon

    console.log(lat,lon)

}
     container =document.getElementById("container");

    function appendData(data) {
        
        container.innerHTML = null;

        var divname = document.createElement("div")
        divname.setAttribute("id", "divname")

        let name = document.createElement("div");
        name. innerText = data.name;
        name.setAttribute("id", "cityname")

        var todate = document.createElement("p")
        todate.innerText = "On : "+ date;

        divname.append(name,todate);

        var divmain = document.createElement("div");
        divmain.setAttribute("id", "divmain")

        var divicon = document.createElement("div");
        divicon.setAttribute("id", "divicon")

        console.log(data.weather[0].main)

        if (data.weather[0].main=="Clouds")
        {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/03d@4x.png"
            divicon.append(icon);
        }
        else if(data.weather[0].main=="Clear")
        {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/01d@4x.png"
            divicon.append(icon);
        }
        else if (data.weather[0].main=="Snow")
        {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/13d@4x.png"
            divicon.append(icon);
        }
        else if (data.weather[0].main == "Rain") {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/10d@4x.png"
            divicon.append(icon);
        }
        else if (data.weather[0].main == "Drizzle") {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/09d@4x.png"
            divicon.append(icon);
        }
        else if (data.weather[0].main == "Thunderstorm") {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/11d@4x.png"
            divicon.append(icon);
        }
        else{
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/50d@4x.png"
            divicon.append(icon);
        }

        
        var details = document.createElement("div")
        details.setAttribute("id", "details")

        let temp = document.createElement("h3");
        temp.innerText = Math.floor(data.main.temp) + "°"
        temp.setAttribute("id", "temp")

        let pressure = document.createElement("h3");
        pressure.innerText ="Pressure: " + data.main.pressure;

        let humidity = document.createElement("h3"); 
        humidity.innerText ="Humidity: " + data.main.humidity;

        let wind = document.createElement("h3");
        wind.innerText = "Wind Speed: " + data.wind.speed;

        details.append(temp,pressure,humidity, wind);
        divmain.append(details,divicon);

        let iframe = document.createElement("iframe");
        iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
        iframe.width = "600"
        iframe.height = "500"
        iframe.frameborder = "0"
        iframe.scrolling = "no"
        iframe.marginheight = "0"
        iframe.marginwidth = "0"
        iframe.setAttribute("class", "gmap_canvas")

        

        container.append(divname, divmain);

        var mapdiv = document.querySelector(".gmap_canvas")
        mapdiv.append(iframe)
    }

    
    async function getForecast() {
    try{
    

    let response = await fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=acb6f9e7c9660a79a523ee1d55056162`)

    var fcastdata = await response.json()
    
    forecastdata = fcastdata.daily;

    console.log(forecastdata)
    
    appendForecast(forecastdata)

    } catch (err) {
        console.log(err)
    }
}

 var divdowner = document.createElement("div");
 divdowner.setAttribute("id","divdowner")

 arrdays = ["Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"]
 count=0
function appendForecast(forecastdata) {

    forecastdata.map(function(el){

       

        var bottomdiv = document.createElement('div');
        bottomdiv.setAttribute("id", "bottomdiv")

        var day1= document.createElement("div")
        day1.innerText = arrdays[count++];

        var daymaxdiv = document.createElement('div');
        daymaxdiv.innerText ="Max : " + el.temp.max + "°"

        var daymindiv = document.createElement('div');
        daymindiv.innerText ="Min : "+ el.temp.min + "°"

        bottomdiv.append(day1)

        if (el.weather[0].main=="Clouds")
        {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/03d@2x.png"
            bottomdiv.append(icon);
        }
        else if(el.weather[0].main=="Clear")
        {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/01d@2x.png"
            bottomdiv.append(icon);
        }
        else if (el.weather[0].main=="Snow")
        {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/13d@2x.png"
            bottomdiv.append(icon);
        }
        else if (el.weather[0].main== "Rain") {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/10d@2x.png"
            bottomdiv.append(icon);
        }
        else if (el.weather[0].main == "Drizzle") {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/09d@2x.png"
            bottomdiv.append(icon);
        }
        else if (el.weather[0].main == "Thunderstorm") {
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/11d@2x.png"
            bottomdiv.append(icon);
        }
        else{
            var icon = document.createElement("img")
            icon.src = "https://openweathermap.org/img/wn/50d@2x.png"
            bottomdiv.append(icon);
        }

        bottomdiv.append(daymaxdiv,daymindiv)
        divdowner.append(bottomdiv)
        container.append(divdowner)
        
    })
}





