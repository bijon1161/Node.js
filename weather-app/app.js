
const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=2d444274c9bce5cb927c0b36c8bbdf2e&query=37.8267,-122.4233&units=m"
const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmlqb24xMTYxIiwiYSI6ImNrenBtZGRxbDA1cHQycG16bjc2aXBmMjQifQ.7EIPiv2IRva_DVCKAuAUvA&limit=1"

request({ url : url, json:true},(error,response)=>{
   
    console.log(response.body.current.weather_descriptions[0]+". The temperature is now "+response.body.current.temperature+",but it feels like "+response.body.current.feelslike)

})

request({url : geoUrl,json:true},(error,response)=>{
    
    console.log("Place Name : "+response.body.features[0].place_name+"\nLongtitude is : "+response.body.features[0].center[1]+"\nLattitude is : "+response.body.features[0].center[0])
})