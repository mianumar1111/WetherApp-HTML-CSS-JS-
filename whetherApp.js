var btn = document.querySelector('.searchbtn')
var tem = document.querySelector('.temp')
var hum = document.querySelector('.humidity')
var win = document.querySelector('.wind')
var Cname = document.querySelector('.cityName')

btn.addEventListener('click',async ()=>{
    var city = document.querySelector('.search input').value
    var url =`https://api.weatherapi.com/v1/current.json?key=63166dbdee5d4c4cad4212358231009&q=${city}`
    var response = await fetch(url)
    .then((response)=>{
        return response.json()
    }).then((value)=>{
        // console.log(value.location)
        // console.log(value.current)
        var temp = value.current.temp_c
        var humidity = value.current.humidity
        var wind = value.current.wind_kph
        var name = value.location.name
        
        tem.textContent = temp+ '°C'
        hum.textContent = humidity+'%'
        win.textContent = wind +'km/h'
        Cname.textContent = name
    })
    
})





