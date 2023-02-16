import { List } from "@mui/icons-material";
import { Button, Divider, ListItem, Stack, useMediaQuery } from "@mui/material";
import { userAgent } from "next/server";
import { useState } from "react";
import DemandRow from "../components/Demand/DemandRow";
import { useDirectMessageProps } from "../Hooks/hooks";

function MessageList() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const [user, setUsername] = useState("");
    const {setDirectMessageProps}=useDirectMessageProps()
    const demouser = [
        {
            username: "example1"
        },
        {
            username: "example2"
        },
        {
            username: "example3"
        },
        {
            username: "example4"
        },
        {
            username: "example5"
        },
        {
            username: "example6"
        },
    ];
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        console.log(e);
    }

    return (
        <Stack sx={{ width: matches ? "50%" : "100%" }}>
            {demouser.map(({username}, index) => (
                     <Button key = {index} style={{textAlign: "center"}} onClick={()=>setDirectMessageProps({DirectMessageId:username})} value={username}>{username}</Button>
            ))}
        </Stack>
    );
}

export default MessageList;