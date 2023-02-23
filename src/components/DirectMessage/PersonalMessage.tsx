import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useDirectMessage } from "../../pages/Hooks/hooks";
import MessageBox from "./MessageBox";
type MessageProps = {
    inputValue: string;
    sendAt: Date;
    sender: string;
};
function PersonalMessage() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const [InputValue, setInputValue] = useState("");
    const [messages, setMessage] = useState<MessageProps[]>([]);
    const { message } = useDirectMessage();
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const date = new Date();
        const newMessage: MessageProps = {
            inputValue: InputValue,
            sendAt: date,
            sender: "me",
        };
        setMessage([newMessage, ...messages]);
        setInputValue("");
    };

    return (
        <Stack
            sx={{ width: matches ? "50%" : "100%" }}
            style={{ textAlign: "center" }}
            flexGrow={1}
            p={3}
        >
            <Box>
                <MessageBox messages={message} />
            </Box>
            <Box>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {/* <TextField type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e)}></TextField> */}
                    <TextField
                        type="text"
                        value={InputValue}
                        label="メッセージを入力しなさ"
                    ></TextField>
                    <Button
                        variant="contained"
                        style={{ height: "60px" }}
                        endIcon={<SendIcon />}
                    >
                        送信
                    </Button>
                </form>
            </Box>
        </Stack>
    );
}

export default PersonalMessage;
