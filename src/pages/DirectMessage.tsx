import { Divider, Stack } from "@mui/material";
import MessageList from "../components/DirectMessage/MessageList";
import PersonalMessage from "../components/DirectMessage/PersonalMessage";
export default function DirectMessage() {
    return (
        <Stack direction="row">
            <MessageList></MessageList>
            <Divider orientation="vertical" flexItem></Divider>
            <PersonalMessage></PersonalMessage>
        </Stack>
    );
}
