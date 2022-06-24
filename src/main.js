// Main JS file
import { getWeatherByCity } from './apiService.js'

const viewElems = {}

const getDOMElem = id => {
	return document.getElementById(id)
}

const connectHTMLElems = () => {
	viewElems.mainContainer = getDOMElem('mainContainer')
	viewElems.weatherSearchView = getDOMElem('weatherSearchView')
	viewElems.weatherForecastView = getDOMElem('weatherForecastView')

	viewElems.searchInput = getDOMElem('searchInput')
	viewElems.searchButton = getDOMElem('searchButton')

	viewElems.weatherCity = getDOMElem('weatherCity')
	viewElems.weatherIcon = getDOMElem('weatherIcon')
	viewElems.weatherCurrentTemp = getDOMElem('weatherCurrentTemp')
	viewElems.weatherMaxTemp = getDOMElem('weatherMaxTemp')
	viewElems.weatherMinTemp = getDOMElem('weatherMinTemp')

	viewElems.returnToSearchBtn = getDOMElem('returnToSearchBtn')
}

const setupListeners = () => {
	viewElems.searchInput.addEventListener('keydown', onEnterSubmit)
	viewElems.searchButton.addEventListener('click', onClickSubmit)
	viewElems.returnToSearchBtn.addEventListener('click', returnToSearch)
}

const initializeApp = () => {
	connectHTMLElems()
	setupListeners()
}

const onClickSubmit = event => {
	fadeInOut()
	let query = viewElems.searchInput.value
	getWeatherByCity(query).then(data => {
		displayWeatherData(data)
	})
	setTimeout(() => {
		switchView()
		fadeInOut()
	}, 500)
}

const onEnterSubmit = event => {
	if (event.key === 'Enter') {
		fadeInOut()
		let query = viewElems.searchInput.value
		getWeatherByCity(query).then(data => {
			displayWeatherData(data)
		})
		setTimeout(() => {
			switchView()
			fadeInOut()
		}, 500)
	}
}

const displayWeatherData = (data) => {
    console.log(data)
    viewElems.weatherCity.innerText = data.name
    viewElems.weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    viewElems.weatherIcon.alt = data.weather[0].main


    const currentTemp = data.main.temp.toFixed(2)
    const maxTemp = data.main.temp_max.toFixed(2)
    const minTemp = data.main.temp_min.toFixed(2)

    viewElems.weatherCurrentTemp.innerText = `Current temperature: ${currentTemp}`
    viewElems.weatherMaxTemp.innerText = `Max temperature: ${maxTemp}`
    viewElems.weatherMinTemp.innerText = `Min temperature: ${minTemp}`
}

const switchView = () => {
	if (viewElems.weatherSearchView.style.display !== 'none') {
		viewElems.weatherSearchView.style.display = 'none'
		viewElems.weatherForecastView.style.display = 'flex'
	} else {
		viewElems.weatherSearchView.style.display = 'flex'
		viewElems.weatherForecastView.style.display = 'none'
	}
}

const fadeInOut = () => {
	if (viewElems.mainContainer.style.opacity === '1' || viewElems.mainContainer.style.opacity === '') {
		viewElems.mainContainer.style.opacity = '0'
	} else {
		viewElems.mainContainer.style.opacity = '1'
	}
}

const returnToSearch = () => {
	fadeInOut()
	setTimeout(() => {
		switchView()
		fadeInOut()
	}, 500)
}

document.addEventListener('DOMContentLoaded', initializeApp)
