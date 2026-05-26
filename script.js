var link = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=aadb7f808fa56fa732b60fb578867ca6";
var request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function () {
    if (request.status >= 200 && request.status <= 400) {

        var obj = JSON.parse(this.response);
        var temp = obj.main.temp;
        console.log(obj);
        document.getElementById("location").innerHTML = obj.name;
        document.getElementById("weather").innerHTML = obj.weather[0].description;
        document.getElementById("temp").innerHTML = Math.round(obj.main.temp - 273.15);
        document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + obj.weather[0].icon + ".png";
    }
    else {
        console.log("The city data is not available :(");
    }
}

request.send();