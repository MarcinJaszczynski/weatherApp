export const getWeatherByCity = city => {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18e182f1fe7064472897b98f8d103198`)
		.then(resp => resp.json())
		.then(data => data)
}
