import { List } from "@mui/icons-material";
import { Button, Divider, ListItem, Stack, useMediaQuery } from "@mui/material";
import { userAgent } from "next/server";
import { useState } from "react";
import DemandRow from "../components/Demand/DemandRow";

function messagelist() {
    const matches: boolean = useMediaQuery("(min-width:1000px)");
    const [user, setUsername] = useState("");
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
            {demouser.map((user, index) => (
                     <Button style={{textAlign: "center"}} onChange={(e) => handleSubmit(e)} value={user.username}>{user.username}</Button>
            ))}
        </Stack>
    );
}

export default messagelist;