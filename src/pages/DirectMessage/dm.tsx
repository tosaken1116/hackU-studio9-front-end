import { Box, Divider, Grid, Stack } from "@mui/material";
import Messagelist from "./messagelist";
import Message from "./PersonalMessage";

function dm() {
    return (
        <Stack direction="row">
            <Messagelist></Messagelist>
            <Divider orientation="vertical" flexItem></Divider>
            <Message></Message>
        </Stack>
    );
}

export default dm;