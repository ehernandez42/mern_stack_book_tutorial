import React, {useState} from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';

//stopped here!
//https://www.youtube.com/watch?v=5Y5QKfxTErU&t=2658s
const bookStoreTitle = " Eleazar's Book Store";
const Header = () => {
    const [floater, setFloater] = useState();
    return (
    <div>
        <AppBar sx={{backgroundColor: "#8f9779"}} position='Sticky'>
            <Toolbar>
            <Typography>
                <div>
                    <CollectionsBookmarkRoundedIcon />
                {bookStoreTitle}
                </div>
            </Typography>
                <Tabs sx={{ml: 'auto'}} textColor='inherit' TabIndicatorProps={{
                    style: {backgroundColor: "#18392b"}
                }} value={floater} onChange={(e, val) => setFloater(val)}>
                    <Tab label='Books' />
                    <Tab label='Add Book' />
                    <Tab label='About us' />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
    );
}

export default Header;