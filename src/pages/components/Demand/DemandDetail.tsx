import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Comments from "../Comment/Comments";
export default function DemandDetail() {
    const demodata = {
        title: "testtitle",
        createdAt: "2022-02-16",
        author: "test",
        goodNumber: "1",
        viewNumber: "1",
        isResolved: false,
        caption: "test caption",
    };
    return (
        <Box flexGrow={1} p={2} sx={{ overflow: "auto", maxHeight: "85vh" }}>
            <Stack p={2} spacing={2}>
                <Paper>
                    <Stack p={3} spacing={2}>
                        <Stack>
                            <Typography variant="h3">
                                {demodata.title}
                            </Typography>
                            <Stack direction="row">
                                <Box flexGrow={1}></Box>
                                <Typography>{demodata.author}</Typography>
                            </Stack>
                        </Stack>
                        <Typography variant="body1">
                            {demodata.caption}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Box>
                                <Typography
                                    sx={{
                                        color: demodata.isResolved
                                            ? "green"
                                            : "red",
                                    }}
                                >
                                    {demodata.isResolved ? "解決済" : "未解決"}
                                </Typography>
                            </Box>
                            <Box>
                                <Stack direction="row">
                                    <ViewKanbanIcon fontSize="small" />
                                    <Typography>
                                        {demodata.viewNumber}
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row">
                                    <ThumbUpIcon fontSize="small" />
                                    <Typography>
                                        {demodata.goodNumber}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Paper>
                <Comments />
            </Stack>
        </Box>
    );
}
