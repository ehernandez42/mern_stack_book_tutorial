import React from 'react';
import {Typography} from "@mui/material";

const Home = () => {
    return (
        <div className="home-intro">
            <Typography variant="h2" component="h2">
                Welcome to my Book Application.
            </Typography>
            <Typography variant="h4" component="h2">
                To begin: - Please head over to the Add Book section
            </Typography>
            <Typography variant="h4" component="h2">
                - Create a new entry of a book that you think I would like.
            </Typography>
            <Typography variant="h5" component="h2">
                (Don't forget to add an image; it's one of my favorite parts!)
            </Typography>
            <Typography variant="h4" component="h2">
                - Click 'Add Book' and then head over to the Books tab to see what you did!
            </Typography>

        </div>
    )
}

export default Home;