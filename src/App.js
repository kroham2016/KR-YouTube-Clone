import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import {SearchBar,VideoDetails,VideoList} from './components';

export default class App extends Component {

    render() {
        return (
            <Grid container spacing={5} justify="center">
                <Grid item xs={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
