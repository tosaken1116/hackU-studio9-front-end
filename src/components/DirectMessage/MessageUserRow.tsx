import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { MessageUserRowProps } from "../../Type/type";
import { Date } from "../Format/Date";

export default function MessageUserRow({
    imageUrl,
    userName,
    messagedAt,
}: MessageUserRowProps) {
    return (
        <Button variant="outlined">
            <Stack>
                <Stack direction="row">
                    <Image
                        src={imageUrl}
                        width={30}
                        height={30}
                        alt="icon"
                    ></Image>
                    <Typography variant="h6">{userName}</Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Box flexGrow={1}></Box>
                    <Date dateString={messagedAt}></Date>
                </Stack>
            </Stack>
        </Button>
    );
}
