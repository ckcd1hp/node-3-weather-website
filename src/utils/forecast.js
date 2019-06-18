const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2ff41ddb1c3c9af8f8907d43810110ed/' + latitude + ',' + longitude + '?&lang=ja';
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services', undefined);
        } else if (body.error) {
            callback('Could not find location')
        } else {
            const forecast = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees. There is a ' + body.currently.precipProbability + '% chance of rain.';
            const minMaxTempForecast = ' The temperature low will be ' + body.daily.data[0].temperatureLow + ' degrees and the high will be ' + body.daily.data[0].temperatureHigh + ' degrees. Have a great day!';
            callback(undefined, forecast + minMaxTempForecast);
        }
    })
}

module.exports = forecast;