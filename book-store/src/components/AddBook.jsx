import React, {useState} from 'react';
import {Button, FormControlLabel, FormLabel, TextField} from "@mui/material";
import { Box } from "@mui/system";
import {CheckBox} from "@mui/icons-material";


//double checking the check box feature. It's being weird and not clicking
const AddBook = () => {
    const [submit, setSubmit] = useState({
        name: "",
        author: "",
        description: "",
        price: "",
        available: false,
        image: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
        setSubmit((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(submit);
    }
    return (
        <Box display="flex" flexDirection="column"
             justifyContent={'center'} maxWidth={700} alignContent={'center'}
            alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop={16}>
            <form onSubmit={handleSubmit}>
                <FormLabel>Book Name</FormLabel>
                <TextField value={submit.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" autoComplete="off" />
                <FormLabel>Author</FormLabel>
                <TextField value={submit.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" autoComplete="name" />
                <FormLabel>Description</FormLabel>
                <TextField value={submit.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" autoComplete="off" />
                <FormLabel>Price</FormLabel>
                <TextField value={submit.price} onChange={handleChange} type={"number"} margin="normal" fullWidth variant="outlined" name="price" autoComplete="off" />
                <FormLabel>Available</FormLabel>
                <TextField type={"number"} margin="normal" fullWidth variant="outlined" name="available" autoComplete="off" />
                <FormLabel>Image</FormLabel>
                <TextField value={submit.image} onChange={handleChange} type={"number"} margin="normal" fullWidth variant="outlined" name="image" autoComplete="off" />
                <FormControlLabel control={<CheckBox checked={checked} onChange={()=> setChecked(!checked)} />} label="Available" />
                <Button variant="contained" type="submit">Add Book</Button>
            </form>
            </Box>
    )
}

export default AddBook;