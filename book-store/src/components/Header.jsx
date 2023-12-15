import React, {useState} from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import {NavLink} from "react-router-dom";

//stopped here!
const bookStoreTitle = " Eleazar's Book App";
const Header = () => {
    const [floater, setFloater] = useState(0);
    return (
    <div>
        <AppBar sx={{backgroundColor: "#8f9779"}} position='sticky'>
            <Toolbar>
            <Typography component={'span'} variant={'body2'} >
                <div>
                    <CollectionsBookmarkRoundedIcon />
                <Tab LinkComponent={NavLink} to="/" label={bookStoreTitle} />
                </div>
            </Typography>
                <Tabs sx={{ml: 'auto'}} textColor='inherit' TabIndicatorProps={{
                    style: {backgroundColor: "#18392b"}
                }} value={floater} onChange={(e, val) => setFloater(val)}>
                    <Tab LinkComponent={NavLink} to="/books" label='Books' />
                    <Tab LinkComponent={NavLink} to="/add-book" label='Add Book' />
                    <Tab LinkComponent={NavLink} to="/about-me" label='About us' />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
    );
}

export default Header;