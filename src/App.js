import React from 'react';

import { Grid } from "@material-ui/core";
import youtube from './api/youtube';

import { SearchBar, VideoDetail } from "./components";
// import  SearchBar  from "./components/SearchBar";
// import  VideoDetail  from "./components/VideoDetail";


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }
    handleSubmit = async (searchTerm) => {
        try {
            const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: 'AIzaSyCKmroGQf5FZ967HkF5R6w7XoBirNiyQ2g',
                    q: searchTerm
                }
            });
            console.log(response.data.items);
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });

        } catch (error) {
            console.error(error);
        }

    }

    render() {
        const { selectedVideo } = this.state
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video List */}
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default App;