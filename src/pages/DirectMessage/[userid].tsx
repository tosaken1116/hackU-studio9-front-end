import { SendAndArchiveTwoTone } from "@mui/icons-material";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { __InputValue } from "graphql";
import { sendError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React, { useState } from "react";

function message() {
        const matches: boolean = useMediaQuery("(min-width:1000px)");
        const [InputValue, setInputValue] = useState("");
        const [messages, setMessage] = useState<message[]>([]);
/*         const demomessage = [
                {
                        message: "お願いします",
                        sendAt: "2021/02/16/17:30",
                        sender: "enemy",
                },
                {
                        message: "わかりました",
                        sendAt: "2021/02/16/17:30",
                        sender: "me",
                },
                {
                        message: "お願いします",
                        sendAt: "2021/02/16/17:30",
                        sender: "enemy",
                },
                {
                        message: "やっぱり嫌です",
                        sendAt: "2021/02/16/17:30",
                        sender: "me",
                },
        ] */

        type message = {
                inputValue: string;
                sendAt: Date;
                sender: string;
        }

        const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.value);
                setInputValue(e.target.value);
        }

        const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                const date = new Date();
                const newMessage: message = {
                        inputValue: InputValue,
                        sendAt: date,
                        sender: "me", 
                };
                setMessage([newMessage, ...messages]);
                setInputValue("");
        }

        return (
                <Stack sx={{width: matches ? "50%" : "100%"}} style={{textAlign: "center"}}>
                        <Box>
                        {messages.map((text) => (
                                <a>{text.inputValue}</a>
                        ))}     
                        </Box>

                        <form onSubmit={(e) => handleSubmit(e)}>
                                <TextField type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}></TextField>
                                <Button type="submit">送信</Button>
                        </form>
                </Stack>
        ) 

};


export default message;