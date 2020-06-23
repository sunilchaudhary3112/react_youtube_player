import axios from "axios";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCKmroGQf5FZ967HkF5R6w7XoBirNiyQ2g'
    }
});