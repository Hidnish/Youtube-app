import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = defaultSearchTerm => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
		search(defaultSearchTerm); 
        // list defaultSearchTerm argument if it comes from outside
	}, [defaultSearchTerm]);

    const search = async (term) => { 
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		setVideos(response.data.items);
    };

    // return an object with outputs
    return [videos, search];
};

export default useVideos;