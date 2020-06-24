import React from 'react';

import { Grid } from "@material-ui/core";
import youtube from './api/youtube';

import { SearchBar, VideoDetail, VideoList } from "./components";
import { Paper, Typography } from "@material-ui/core";
// import  SearchBar  from "./components/SearchBar";
// import  VideoDetail  from "./components/VideoDetail";


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }
    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    handleSubmit = async (searchTerm) => {
        try {
            const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: 'API_KEY',
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
        const { selectedVideo, videos } = this.state
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <h1 style={{marginLeft:'30px', color: '#E94B3CFF'}}>Video Player</h1>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default App;