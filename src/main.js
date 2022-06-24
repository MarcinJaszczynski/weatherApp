// Main JS file
const viewElems = {};

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
}



const initializeApp = () => {
	connectHTMLElems()
	setupListeners()
}

const onClickSubmit = ()=> {}
const onEnterSubmit = () => {}

document.addEventListener('DOMContentLoaded', initializeApp)