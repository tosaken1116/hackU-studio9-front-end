import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { CommentRowType } from "../../Type/type";
import { Date } from "../Format/Date";

export default function CommentRow({
    created_at,
    author,
    caption,
}: CommentRowType) {
    return (
        <Paper>
            <Stack p={2} spacing={2}>
                <Stack direction="row">
                    <Typography>{author.name}</Typography>
                    <Box flexGrow={1}></Box>
                    <Date dateString={created_at} />
                </Stack>
                <Typography variant="h6">{caption}</Typography>
            </Stack>
        </Paper>
    );
}
