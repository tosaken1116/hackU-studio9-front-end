import React, {useState} from "react";
import { Button } from "@mui/material";


const directmessage = () => {
    return (
        <>
        <Button href="./example1">example1</Button>
        <Button href="./example2">example2</Button>
        <Button href="./example3">example3</Button>
        <Button href="./example4">example4</Button>
        <Button href="./example5">example5</Button>
        <Button href="../home">やめる</Button>

        </>
    );
}

export default directmessage;