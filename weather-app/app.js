
const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=2d444274c9bce5cb927c0b36c8bbdf2e&query=37.8267,-122.4233&units=m"
const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmlqb24xMTYxIiwiYSI6ImNrenBtZGRxbDA1cHQycG16bjc2aXBmMjQifQ.7EIPiv2IRva_DVCKAuAUvA&limit=1"


request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
    }
})



request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})