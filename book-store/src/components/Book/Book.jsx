import React from 'react';
import {Button} from "@mui/material";


const Book = (props) => {
    const {_id, name, author, description, price, image} = props.book;
    return(
        <div className={'card'}>
            <img src={image} alt={name} width={250} />
            <article>By: {author}</article>
            <h3>{name}</h3>
            <p>Description: {description}</p>
            <h2>${price}</h2>
            <Button>Update</Button>
            <Button>Delete</Button>
        </div>
        )
}


export default Book;