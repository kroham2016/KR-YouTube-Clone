import React, {useState} from 'react';
import {Paper, TextField} from '@material-ui/core';


export default function SearchBar({handleSubmit}) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <Paper elevation={6} style={{padding: '25px'}} >
            <form onSubmit={handleSubmit(searchTerm)}>
                <TextField fullWidth label="Search..." onChange={handleChange}></TextField>
            </form>
        </Paper>
    )
}
