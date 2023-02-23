import { Box, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useDirectMessageProps } from "../../pages/Hooks/hooks";
import MessageUserRow from "./MessageUserRow";

function MessageList() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const [user, setUsername] = useState("");
    const { setDirectMessageProps } = useDirectMessageProps();
    const demouser = [
        {
            imageUrl: "/vercel.svg",
            userName: "example1",
            messagedAt: "2021-01-01T00:00:00",
        },
        {
            imageUrl: "/vercel.svg",
            userName: "example2",
            messagedAt: "2021-01-01T00:00:00",
        },
        {
            imageUrl: "/vercel.svg",
            userName: "example3",
            messagedAt: "2021-01-01T00:00:00",
        },
        {
            imageUrl: "/vercel.svg",
            userName: "example4",
            messagedAt: "2021-01-01T00:00:00",
        },
        {
            imageUrl: "/vercel.svg",
            userName: "example5",
            messagedAt: "2021-01-01T00:00:00",
        },
        {
            imageUrl: "/vercel.svg",
            userName: "example6",
            messagedAt: "2021-01-01T00:00:00",
        },
    ];
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        console.log(e);
    };

    return (
        <Stack sx={{ width: matches ? "20%" : "100%" }}>
            {demouser.map((user, index) => (
                <Box key={index}>
                    <MessageUserRow {...user}></MessageUserRow>
                </Box>
            ))}
        </Stack>
    );
}

export default MessageList;
