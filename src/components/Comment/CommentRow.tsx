import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { CommentRowType } from "../../Type/type";

export default function CommentRow({
    createdAt,
    author,
    caption,
}: CommentRowType) {
    return (
        <Paper>
            <Stack p={2} spacing={2}>
                <Stack direction="row">
                    <Typography>{author.name}</Typography>
                    <Box flexGrow={1}></Box>
                    <Typography>{createdAt}</Typography>
                </Stack>
                <Typography variant="h6">{caption}</Typography>
            </Stack>
        </Paper>
    );
}
