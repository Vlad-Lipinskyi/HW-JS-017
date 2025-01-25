import { makeMarkup } from "./marking";

const APIKey = "48435087-ff3fc40d69888c64b11d73d2d";

export const getPhoto = (page) => { 
	const API = `https://pixabay.com/api/?key=${APIKey}&q=blue+flowers&image_type=photo&per_page=3&page=${page}`; 
	return fetch(API).then(data => data.json()).then(data => makeMarkup(data))
}
