import { Message } from "@mui/icons-material";
import { Box, Divider, Grid, Stack } from "@mui/material";
import MessageList from "./DirectMessage/messagelist";
import PersonalMessage from "./DirectMessage/PersonalMessage";
export default function DirectMessage(){
    return (<Stack direction="row">
    <MessageList></MessageList>
    <Divider orientation="vertical" flexItem></Divider>
    <PersonalMessage></PersonalMessage>
</Stack>)
}