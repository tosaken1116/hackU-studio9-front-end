import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DemandRowType } from "./type";

export default function DemandRow({
    createdAt,
    author,
    goodNumber,
    title,
    viewNumber,
    status,
}: DemandRowType) {
    return (
        <Stack p={2}>
            <Stack direction="row">
                <Typography variant="h5">{title}</Typography>
                <Box flexGrow={1}></Box>
                <Typography>質問者:{author}</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Typography
                    sx={{
                        color:
                            status == "inProgress"
                                ? "orange"
                                : status == "resolved"
                                ? "green"
                                : "red",
                    }}
                >
                    {status == "inProgress"
                        ? "進行中"
                        : status == "resolved"
                        ? "解決"
                        : "未解決"}
                </Typography>
                <Stack direction="row">
                    <ThumbUpIcon fontSize="small" />
                    <Typography>{goodNumber}</Typography>
                </Stack>
                <Stack direction="row">
                    <ViewKanbanIcon fontSize="small" />
                    <Typography>{viewNumber}</Typography>
                </Stack>
                <Typography variant="body2">{createdAt}</Typography>
            </Stack>
        </Stack>
    );
}
