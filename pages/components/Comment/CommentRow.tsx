import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DemandRowType } from "../Demand/type";

export default function CommentRow({
    createdAt,
    author,
    caption,
}: Pick<DemandRowType, "createdAt" | "author" | "caption">) {
    return (
        <Paper>
            <Stack p={2} spacing={2}>
                <Stack direction="row">
                    <Typography>{author}</Typography>
                    <Box flexGrow={1}></Box>
                    <Typography>{createdAt}</Typography>
                </Stack>
                <Typography variant="h6">{caption}</Typography>
            </Stack>
        </Paper>
    );
}
