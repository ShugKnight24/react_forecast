// use https://cors-anywhere.herokuapp.com/corsdemo for API proxy
// Prevents CORS errors while developing on localhost
const baseUrl = 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/';

const buildConfig = (config: any) => {
	return {
		...config,
		headers: {
			'Content-Type': 'application/json'
		}
	};
};

const parseJSON = (response: any) => {
	return new Promise((resolve) => response.json()
		.then((json: any) => resolve({
			status: response.status,
			statusText: response.statusText,
			json
		}))
	);
};

const makeRequest = (uri: string, config: any) => {
	return fetch(baseUrl + uri, buildConfig(config))
		.then(parseJSON)
		.then((response: any) => {
			if (response.status < 200 || response.status >= 300){
				throw new Error(response.json.message);
			} else {
				return response.json;
			}
		});
};

export const doGet = (uri: string) => {
	return makeRequest(uri, {
		method: "GET"
	});
};
