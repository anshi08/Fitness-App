

export const ExerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3e23272eb4mshd6671aff8ca3239p10852ajsn6a9a74ea201d',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
	},
  };

const fetchAPI = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();
  
	return data;
  };

export default fetchAPI