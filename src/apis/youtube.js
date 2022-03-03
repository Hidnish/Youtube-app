import axios from 'axios';


const KEY = 'AIzaSyAN-ywA3Bxvf2QgZVF22PX9LgBlLQHzhYw';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        type: 'video',
        maxResults: 6,
        key: KEY
    }
})