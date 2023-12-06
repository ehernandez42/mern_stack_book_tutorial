import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, FormLabel, TextField} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AddBook = () => {
    const routerNav = useNavigate();
    const [submit, setSubmit] = useState({
        name: "",
        author: "",
        description: "",
        price: "",
        image: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
        setSubmit((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    }
    const sendRequest = async () => {
       await axios
           .post("http://localhost:5001/books", {
            name: String(submit.name),
            author: String(submit.author),
            description: String(submit.description),
            price: Number(submit.price),
            image: String(submit.image),
            available: Boolean(checked)
        }).then(res => res.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=> routerNav('/books'));
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
                <FormLabel>Image</FormLabel>
                <TextField value={submit.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" autoComplete="off" />
                <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label={"Available"} />
                <Button variant="contained" type="submit">Add Book</Button>
            </form>
            </Box>
    )
}

export default AddBook;