import React, {useState} from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';

const bookStoreTitle = " Eleazar's Book Store";
const Header = () => {
    const [floater, setFloater] = useState();
    return (
    <div>
        <AppBar position='Sticky'>
            <Toolbar>
            <Typography>
                <div>
                    <CollectionsBookmarkRoundedIcon />
                {bookStoreTitle}
                </div>
            </Typography>
                <Tabs textColor='inherit' indicatorColor='secondary' value={floater} onChange={(e, val) => setFloater(val)}>
                    <Tab label='Add Book' />
                    <Tab label='About us' />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
    );
}

export default Header;