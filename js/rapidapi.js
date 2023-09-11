const getWeather = async (city) => {
	const url = `https://the-weather-api.p.rapidapi.com/api/weather/${city}`;
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bfba836c5fmsh3192c29afd71d13p170e42jsn69998f37e523',
		'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
	if(result.success) {
		cityFound = result.data;
		newData();
		console.log('City =>', cityFound)
	} else {
		alert('City was not found...')
	}
} catch (error) {
	console.error(error);
}
}
